import { FastifyPluginAsync } from "fastify";
import {
  getUsersByActiveDepartmentController,
  getUsersByDepartmentList,
  getUsersByIDController,
  getUsersbyActiveInactiveController,
} from "../../../../controllers";
import {
  getUsersbyActiveDepartmentSchema,
  getUsersbyActiveInactiveSchema,
  getUsersbyDepartmentIdSchema,
  getUsersbyIdSchema,
} from "./schema";

const users: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get(
    "/getusersbydepartmentlist",
    getUsersbyDepartmentIdSchema,
    async (request: any, reply) => {
      try {
        const response = await getUsersByDepartmentList(request.query);
        reply.code(200).send(response);
      } catch (error) {
        reply.code(globalThis.status_codes?.error?.status).send(error);
      }
    }
  );

  fastify.get("/user", getUsersbyIdSchema, async (request: any, reply) => {
    try {
      const response = await getUsersByIDController(request.query);
      reply.code(200).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });

  fastify.get(
    "/getusersbydepartment",
    getUsersbyActiveDepartmentSchema,
    async (request: any, reply) => {
      try {
        const response = await getUsersByActiveDepartmentController(
          request.query
        );
        reply.code(200).send(response);
      } catch (error) {
        reply.code(globalThis.status_codes?.error?.status).send(error);
      }
    }
  );

  fastify.get(
    "/activeuser",
    getUsersbyActiveInactiveSchema,
    async (request: any, reply) => {
      try {
        const response = await getUsersbyActiveInactiveController(
          request.query
        );
        reply.code(200).send(response);
      } catch (error) {
        reply.code(globalThis.status_codes?.error?.status).send(error);
      }
    }
  );
};

export default users;
