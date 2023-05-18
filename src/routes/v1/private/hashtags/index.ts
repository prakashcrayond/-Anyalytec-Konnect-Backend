import { FastifyPluginAsync } from "fastify";
import {
  createHashTagController,
  getHashTagController,
  getHashTagbyIDController,
  getHashTagbyactiveController,
  updateBulkHashTagController,
  updateHashTagController,
} from "../../../../controllers";

const hashtags: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.post("/hashtag", async (request: any, reply) => {
    try {
      const response = await createHashTagController(
        request.body,
        request.headers
      );
      reply.code(response.status).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });

  fastify.put("/hashtag", async (request: any, reply) => {
    try {
      const response = await updateHashTagController(
        request.body,
        request.headers
      );
      reply.code(response.status).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });

  fastify.get("/hashtag", async (request: any, reply) => {
    try {
      const response = await getHashTagbyIDController(request.query);
      reply.code(200).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });

  fastify.get("", async (request: any, reply) => {
    try {
      const response = await getHashTagController();
      reply.code(200).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });

  fastify.get("/activehashtag", async (request: any, reply) => {
    try {
      const response = await getHashTagbyactiveController(request.query);
      reply.code(200).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });

  fastify.put("/activehashtag", async (request: any, reply) => {
    try {
      const response = await updateBulkHashTagController(
        request.body,
        request.headers
      );
      reply.code(response.status).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });
};

export default hashtags;
