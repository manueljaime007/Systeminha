import { FastifyInstance } from "fastify";
import { DevController } from "../controllers/DevController";

export async function devRoutes(fastify: FastifyInstance) {
  fastify.get("/api/devs", DevController.list);
}
