import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class DevController {
  static async list(request: FastifyRequest, reply: FastifyReply) {
    try {
      const devs = await prisma.user.findMany({
        where: { role: "user" },
        select: {
          id: true,
          nome: true,
          bio: true,
          tecnologias: true,
          github: true,
        },
      });

      return reply.send(devs);
    } catch (err) {
      console.error("Erro ao buscar devs:", err);
      return reply.status(500).send({ error: "Erro interno no servidor" });
    }
  }
}
