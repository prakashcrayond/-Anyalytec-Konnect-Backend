import { PrismaClient } from "@prisma/client";
import { ResponseType } from "../../utils";
import { FastifyInstance } from "fastify";
const prisma = new PrismaClient();

// interface of your payload
interface payload {
  username: string;
  email: string;
  password: string;
  designation: string;
  telephoneNumber: string;
  dateOfBirth: string;
  dateOfJoining: string;
  active: string;
}

// create department function here
export const createAdminUserController = (
  body: payload,
  fastify: FastifyInstance
) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      // get the payload
      const {
        username,
        email,
        password,
        designation,
        telephoneNumber,
        dateOfBirth,
        dateOfJoining,
        active,
      } = body;

      let hash_password = await fastify.bcrypt.hash(password);

      //   create the admin user
      await prisma.users.create({
        data: {
          id: 6,
          username,
          email,
          password: hash_password,
          designation,
          telephone_number: telephoneNumber,
          date_of_birth: new Date(dateOfBirth),
          date_of_joining: new Date(dateOfJoining),
          active: JSON.parse(active),
          is_default: designation.toLowerCase() === "admin" ? true : false,
          updated_at: new Date(),
          created_at: new Date(),
        },
      });

      // resolve
      return resolve({
        ...globalThis.status_codes?.success,
        message: "Admin Panel created successfully!",
      });
    } catch (error: any) {
      console.log(error);
      reject({
        ...globalThis.status_codes?.error,
        message: error?.message,
      });
    }
  });
};
