import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const fastify = Fastify();
const prisma = new PrismaClient();

fastify.register(cors, {
  origin: "*", // tu pode limitar depois
});

// Rota GET /devs
fastify.get("/api/devs", async (request, reply) => {
  try {
    const devs = await prisma.user.findMany({
      where: {
        role: "user",
      },
      select: {
        id: true,
        nome: true,
        bio: true,
        tecnologias: true,
        github: true,
      },
    });

    return devs;
  } catch (error) {
    console.error("Erro ao buscar devs:", error);
    reply.status(500).send({ error: "Erro interno no servidor" });
  }
});

// Iniciar servidor
fastify.listen({ port: 3001 }, () => {
  console.log("🚀 Servidor rodando em http://localhost:3001");
});
