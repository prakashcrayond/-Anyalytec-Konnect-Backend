import { FastifyPluginAsync } from "fastify";
import {
  createAdminUserController,
  getLoginLogoController,
} from "../../../../controllers";

const auth: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get("/panel", async (request: any, reply) => {
    try {
      const response = await getLoginLogoController();
      reply.code(200).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });

  fastify.post("/createadmin", async (request: any, reply) => {
    try {
      const response = await createAdminUserController(request.body, fastify);
      reply.code(response.status).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });
};

export default auth;
