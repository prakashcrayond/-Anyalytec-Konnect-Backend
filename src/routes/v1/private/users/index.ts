import { FastifyPluginAsync } from "fastify";
import {
  getUsersByActiveDepartmentController,
  getUsersByDepartmentList,
  getUsersByIDController,
} from "../../../../controllers";

const users: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get("/getusersbydepartmentlist", async (request: any, reply) => {
    try {
      const response = await getUsersByDepartmentList(request.query);
      reply.code(200).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });

  fastify.get("/user", async (request: any, reply) => {
    try {
      const response = await getUsersByIDController(request.query);
      reply.code(200).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });

  fastify.get("/getusersbydepartment", async (request: any, reply) => {
    try {
      const response = await getUsersByActiveDepartmentController(
        request.query
      );
      reply.code(200).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });
};

export default users;
