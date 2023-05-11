import { FastifyPluginAsync } from "fastify";
import {
  CreateDepartment,
  GetAllDepartments,
  DeleteDepartment,
  UpdateDepartment,
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
      const response = await GetAllDepartments(request.params);
      reply.code(200).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });

  fastify.put("/department", async (request: any, reply) => {
    try {
      const response = await UpdateDepartment(request.body, request.headers);
      reply.code(response.status).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });

  fastify.delete("/department", async (request: any, reply) => {
    try {
      console.log(
        "----------------------------------------------------------------->",
        request.body
      );

      const response = await DeleteDepartment(request.params, request.headers);
      reply.code(response.status).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });
};

export default departments;
