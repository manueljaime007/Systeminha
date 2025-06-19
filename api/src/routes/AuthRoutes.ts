import { FastifyInstance } from "fastify";
import { AuthController } from "../controllers/AuthController";

export async function authRoutes(app: FastifyInstance) {
  app.post("/api/auth/register", AuthController.register);
  app.post("/api/auth/login", AuthController.login);
}
