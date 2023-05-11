import { FastifyPluginAsync } from "fastify";
import { CreateDepartment } from "../../../../controllers";

const departments: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.post("/department", async (request: any, reply) => {
    try {
      const response = await CreateDepartment(request.body);
      reply.code(response.status).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });
};

export default departments;
