import { FastifyRequest, FastifyReply } from "fastify";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "chave_default_secreta";

interface JwtPayload {
  id: number;
  email: string;
  role: string;
}

export async function verifyJWT(request: FastifyRequest, reply: FastifyReply) {
  const authHeader = request.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return reply.status(401).send({ error: "Token ausente ou inválido" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    request.user = decoded;
  } catch (err) {
    return reply.status(401).send({ error: "Token inválido" });
  }
}
