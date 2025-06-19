// // src/routes/devs.ts
// import { FastifyInstance } from "fastify";
// import { z } from "zod";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export async function devRoutes(app: FastifyInstance) {
//   app.post("/api/auth/register", async (request, reply) => {
//     const bodySchema = z.object({
//       nome: z.string().min(1),
//       email: z.string().email(),
//       password: z.string().min(6),
//       bio: z.string().optional(),
//       tecnologias: z.string().optional(),
//       github: z.string().url().optional()
//     });

//     const body = bodySchema.safeParse(request.body);

//     if (!body.success) {
//       return reply.status(400).send({ error: "Invalid input", issues: body.error.issues });
//     }

//     const { nome, email, password, bio, tecnologias, github } = body.data;

//     try {
//       const novoDev = await prisma.user.create({
//         data: {
//           nome,
//           email,
//           password, // depois tu pode hashear isso
//           bio,
//           tecnologias,
//           github,
//         },
//       });

//       return reply.status(201).send(novoDev);
//     } catch (err) {
//       console.error("Erro ao criar dev:", err);
//       return reply.status(500).send({ error: "Erro ao criar dev" });
//     }
//   });


//   // rota de teste
//   app.get('/api/auth/login', async (request, reply)=>{
//     reply.send("Olá, login")
//   })

// }
