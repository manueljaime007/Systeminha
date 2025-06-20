import { FastifyRequest, FastifyReply } from "fastify";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "chave_default_secreta";

type AuthPayload = {
  id: number;
  email: string;
  role: string;
};

export async function verifyJWT(request: FastifyRequest, reply: FastifyReply) {
  const authHeader = request.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return reply.status(401).send({ error: "Token ausente ou inválido" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // força a tipagem no request
    (request as any).user = decoded as AuthPayload;
  } catch (err) {
    return reply.status(401).send({ error: "Token inválido" });
  }
}
