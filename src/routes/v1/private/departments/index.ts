import { FastifyPluginAsync } from "fastify";
import {
  CreateDepartment,
  DeleteDepartment,
  GetAllDepartments,
  UpdateDepartment,
  UpdateDepartmentStatus,
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
      const response = await GetAllDepartments(request.query);
      reply.code(200).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });

  fastify.put("/activedepartment", async (request: any, reply) => {
    try {
      const response = await UpdateDepartmentStatus(request.params);
      reply.code(response.status).send(response);
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
      const response = await DeleteDepartment(request.query, request.headers);
      reply.code(response.status).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });
};

export default departments;
