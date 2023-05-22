import { PrismaClient } from "@prisma/client";
import { ResponseType } from "../../utils";
import { FastifyInstance } from "fastify";
const prisma = new PrismaClient();

// interface of your payload
interface payload {
  id: number;
  countryCode: string;
  profilePic: string;
  signPic: string;
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

// update User function here
export const updateUserController = (
  body: payload,
  headers: any,
  fastify: FastifyInstance
) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      // get the payload
      const {
        id,
        countryCode,
        profilePic,
        signPic,
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

      //   update the user
      await prisma.users.update({
        where: {
          id,
        },
        data: {
          username,
          country_code: countryCode,
          profile_pic: profilePic,
          sign_pic: signPic,
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
          updated_by: get_user_details?.id,
        },
      });

      // resolve
      return resolve({
        ...globalThis.status_codes?.success,
        message: "User updated successfully!",
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
