import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// const bcrypt = require("bcrypt");
import { FastifyInstance } from "fastify";
import { ResponseType } from "../../utils";

// interface of your payload
interface payload {
  username: string;
  password: string;
}

// login function here
export const authLoginController = (
  body: payload,
  fastify: FastifyInstance
) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      // get the payload
      const {
        username,
        // password
      } = body;

      // let hashPassword: string = bcrypt.hashSync(password, 10);

      let result: any = await prisma.users.findUnique({
        where: {
          username: username,
          // password: hashPassword,
        },
        // filter the variables
        select: {
          email: true,
          firstname: true,
          lastname: true,
          id: true,
          username: true,
          refreshtoken: {
            select: {
              token: true,
            },
          },
        },
      });

      if (!result) {
        return resolve({
          ...globalThis.status_codes?.not_found,
          message: "User not found",
        });
      }

      // generate the token here
      const access_token = fastify.jwt.sign({ sub: result.username });

      return resolve({
        ...globalThis.status_codes?.success,
        data: {
          access_token,
          email: result.email,
          fullName: result.firstname + " " + result.lastname,
          id: result.id,
          refreshToken: result.refreshtoken[0].token,
          tokenType: "Bearer",
          username: result.username,
        },
      });
    } catch (error: any) {
      reject({
        ...globalThis.status_codes?.error,
        message: error?.message,
      });
    }
  });
};
