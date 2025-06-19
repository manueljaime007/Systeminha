import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";
import { verifyJWT } from "./middlewares/verifyJWT";
import { devRoutes } from "./routes/DevRoutes";
import { authRoutes } from "./routes/AuthRoutes";

const fastify = Fastify();
const prisma = new PrismaClient();

fastify.register(cors, {
  origin: "*",
});

// Rota protegida
fastify.get("/api/dashboard", { preHandler: verifyJWT }, async (req, res) => {
  const user = (req as any).user as {
    id: number;
    email: string;
    role: string;
  };

  return {
    message: `Olá, ${user.email}. Bem-vindo ao seu painel 🔐`,
  };
});

fastify.register(devRoutes)
fastify.register(authRoutes)

fastify.listen({ port: 3001 }, () => {
  console.log("🔥 Servidor no ar em http://localhost:3001");
});
