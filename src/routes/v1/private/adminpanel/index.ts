import { FastifyPluginAsync } from "fastify";

import {
  createAdminPanelController,
  getAdminPanelController,
  getHeaderLogoController,
  updateAdminPanelController,
} from "../../../../controllers";
import {
  createAdminPanelSchema,
  getAdminPanelSchema,
  getHeaderLogoSchema,
  updateAdminPanelSchema,
} from "./schema";

const adminpanel: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get("/panel", getAdminPanelSchema, async (request: any, reply) => {
    try {
      const response = await getAdminPanelController();
      reply.code(200).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });

  fastify.post(
    "/panel",
    createAdminPanelSchema,
    async (request: any, reply) => {
      try {
        const response = await createAdminPanelController(
          request.body,
          request.headers
        );
        reply.code(response.status).send(response);
      } catch (error) {
        reply.code(globalThis.status_codes?.error?.status).send(error);
      }
    }
  );

  fastify.put("/panel", updateAdminPanelSchema, async (request: any, reply) => {
    try {
      const response = await updateAdminPanelController(
        request.body,
        request.headers
      );
      reply.code(response.status).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });

  fastify.get(
    "/headerlogo",
    getHeaderLogoSchema,
    async (request: any, reply) => {
      try {
        const response = await getHeaderLogoController();
        reply.code(200).send(response);
      } catch (error) {
        reply.code(globalThis.status_codes?.error?.status).send(error);
      }
    }
  );
};

export default adminpanel;
