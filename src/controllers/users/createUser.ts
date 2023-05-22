import { PrismaClient } from "@prisma/client";
import { ResponseType } from "../../utils";
import { FastifyInstance } from "fastify";
const prisma = new PrismaClient();

// interface of your payload
interface payload {
  countryCode: string;
  profilePic: string;
  username: string;
  firstname: string;
  lastname: string;
  designation: string;
  department: {
    id: number;
  };
  manager: {
    id: number;
  };
  email: string;
  telephoneNumber: string;
  dateOfJoining: string;
  dateOfBirth: string;
  role: {
    id: number;
  };
  password: string;
  active: boolean;
}

// create User function here
export const createUserController = (
  body: payload,
  headers: any,
  fastify: FastifyInstance
) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      // get the payload
      const {
        countryCode,
        profilePic,
        username,
        firstname,
        lastname,
        designation,
        department,
        manager,
        email,
        telephoneNumber,
        dateOfJoining,
        dateOfBirth,
        role,
        // password,
        active,
      } = body;

      //   // hashing the password
      //   let hash_password = await fastify.bcrypt.hash(password);

      // get header token expand
      const { sub } = headers?.userDetails;

      // find the user
      const get_user_details = await prisma.users.findUnique({
        where: {
          username: sub,
        },
        select: {
          id: true,
        },
      });

      //   create the user
      await prisma.users.create({
        data: {
          // id: 7,
          username,
          country_code: countryCode,
          profile_pic: profilePic,
          firstname,
          lastname,
          department_id: department?.id,
          manager_id: manager?.id,
          role_id: role?.id,
          email,
          //   password: hash_password,
          designation,
          telephone_number: telephoneNumber,
          date_of_birth: new Date(dateOfBirth),
          date_of_joining: new Date(dateOfJoining),
          active,
          is_default: designation.toLowerCase() === "admin" ? true : false,
          updated_at: new Date(),
          created_at: new Date(),
          created_by: get_user_details?.id,
          updated_by: get_user_details?.id,
        },
      });

      // resolve
      return resolve({
        ...globalThis.status_codes?.success,
        message: "User created successfully!",
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
