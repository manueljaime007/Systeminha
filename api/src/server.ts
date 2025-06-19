import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";
import { request } from "http";
// import { devRoutes } from "./routes/devs"; // SEM .js no fim
import { authRoutes } from "./routes/AuthRoutes";
import { verifyJWT } from "./middlewares/verifyJWT.js";
import "./types/fastify.js"; // Se estiver no modo ESM



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

fastify.get('/', async (request, reply)=>{
  reply.send("Olá")
})



fastify.get("/api/dashboard", { preHandler: verifyJWT }, async (req, res) => {
  if (!req.user) {
    return res.status(401).send({ error: "Não autenticado" });
  }
  return { message: `Olá, ${req.user.email}. Bem-vindo ao seu painel 🔐` };
});





fastify.register(authRoutes);

// Iniciar servidor
fastify.listen({ port: 3001 }, () => {
  console.log("🚀 Servidor rodando em http://localhost:3001");
});
