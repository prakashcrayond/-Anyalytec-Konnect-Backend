import { FastifyPluginAsync } from "fastify";
import {
  CreateDepartment,
  UpdateActiveDepartment,
} from "../../../../controllers";

const departments: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.post("/department", async (request: any, reply) => {
    try {
      const response = await CreateDepartment(request.body, request.headers);
      reply.code(response.status).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });

  fastify.get("/activedepartment", async (request: any, reply) => {
    try {
      const response = await UpdateActiveDepartment(
        request.params,
        request.headers
      );
      reply.code(200).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });
};

export default departments;
