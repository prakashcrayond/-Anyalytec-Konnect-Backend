import { FastifyPluginAsync } from "fastify";
import {
  createHashTagController,
  getHashTagController,
  getHashTagbyIDController,
  getHashTagbyactiveController,
  updateBulkHashTagController,
  updateHashTagController,
} from "../../../../controllers";
import {
  bulkUpdateHashTagSchema,
  createHashTagSchema,
  getActiveHashtagbySchema,
  getAllHashtagbySchema,
  getHashtagbyIdSchema,
  updateHashTagSchema,
} from "./schema";

const hashtags: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.post("/hashtag", createHashTagSchema, async (request: any, reply) => {
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

  fastify.put("/hashtag", updateHashTagSchema, async (request: any, reply) => {
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

  fastify.get("/hashtag", getHashtagbyIdSchema, async (request: any, reply) => {
    try {
      const response = await getHashTagbyIDController(request.query);
      reply.code(200).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });

  fastify.get("", getAllHashtagbySchema, async (request: any, reply) => {
    try {
      const response = await getHashTagController();
      reply.code(200).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });

  fastify.get(
    "/activehashtag",
    getActiveHashtagbySchema,
    async (request: any, reply) => {
      try {
        const response = await getHashTagbyactiveController(request.query);
        reply.code(200).send(response);
      } catch (error) {
        reply.code(globalThis.status_codes?.error?.status).send(error);
      }
    }
  );

  fastify.put(
    "/activehashtag",
    bulkUpdateHashTagSchema,
    async (request: any, reply) => {
      try {
        const response = await updateBulkHashTagController(
          request.body,
          request.headers
        );
        reply.code(response.status).send(response);
      } catch (error) {
        reply.code(globalThis.status_codes?.error?.status).send(error);
      }
    }
  );
};

export default hashtags;
