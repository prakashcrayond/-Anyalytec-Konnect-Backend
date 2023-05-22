import { FastifyPluginAsync } from "fastify";
import {
  createUserController,
  getAllUsersController,
  getUsersByActiveDepartmentController,
  getUsersByDepartmentList,
  getUsersByIDController,
} from "../../../../controllers";
import {
  createUsersSchema,
  getUsersbyActiveDepartmentSchema,
  getUsersbyActiveInactiveSchema,
  getUsersbyDepartmentIdSchema,
  getUsersbyIdSchema,
  updateUsersSchema,
} from "./schema";
import { updateUserController } from "../../../../controllers/users/updateUser";

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
    "",
    getUsersbyActiveInactiveSchema,
    async (request: any, reply) => {
      try {
        const response = await getAllUsersController(request.query);
        reply.code(200).send(response);
      } catch (error) {
        reply.code(globalThis.status_codes?.error?.status).send(error);
      }
    }
  );

  fastify.post("/user", createUsersSchema, async (request: any, reply) => {
    try {
      const response = await createUserController(
        request.body,
        request.headers,
        request.fastify
      );
      reply.code(200).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });

  fastify.put("/user", updateUsersSchema, async (request: any, reply) => {
    try {
      const response = await updateUserController(
        request.body,
        request.headers,
        request.fastify
      );
      reply.code(200).send(response);
    } catch (error) {
      reply.code(globalThis.status_codes?.error?.status).send(error);
    }
  });
};

export default users;
