import { FastifyRequest, FastifyReply } from "fastify";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { z } from "zod";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || ""

export class AuthController {
  static async register(request: FastifyRequest, reply: FastifyReply) {
    const registerSchema = z.object({
      nome: z.string().min(2),
      email: z.string().email(),
      password: z.string().min(6),
    });

    const parsed = registerSchema.safeParse(request.body);
    if (!parsed.success) {
      return reply.status(400).send({ error: "Dados inválidos", issues: parsed.error.issues });
    }

    const { nome, email, password } = parsed.data;

    // Verificar se já existe
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return reply.status(400).send({ error: "E-mail já está registrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        nome,
        email,
        password: hashedPassword,
      },
    });

    return reply.status(201).send({
      message: "Usuário criado com sucesso",
      id: newUser.id,
      nome: newUser.nome,
    });
  }

  static async login(request: FastifyRequest, reply: FastifyReply) {
    const loginSchema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
    });

    const parsed = loginSchema.safeParse(request.body);
    if (!parsed.success) {
      return reply.status(400).send({ error: "Dados inválidos", issues: parsed.error.issues });
    }

    const { email, password } = parsed.data;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return reply.status(404).send({ error: "Usuário não encontrado" });

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return reply.status(401).send({ error: "Senha incorreta" });

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "1d" }
    );
    return reply.send({ token });
  }
}
