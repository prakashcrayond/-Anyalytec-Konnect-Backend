import { FastifyPluginAsync } from "fastify";
import {
  authForgotPasswordController,
  authLoginController,
} from "../../../../controllers";

const authentication: FastifyPluginAsync = async (
  fastify,
  opts
): Promise<void> => {
  fastify.post("/signin", async (request: any, reply) => {
    try {
      const response = await authLoginController(request.body, fastify);
      reply.code(response.status).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });

  fastify.post("/forgotpassword", async (request: any, reply) => {
    try {
      const response = await authForgotPasswordController(request.params);
      reply.code(response.status).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });
};

export default authentication;
