import { PrismaClient } from "@prisma/client";
import { ResponseType } from "../../utils";
const prisma = new PrismaClient();

// interface of your payload
interface payload {
  name: string;
  active: boolean;
}

// create department function here
export const CreateDepartment = (body: payload, headers: any) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      // get the payload
      const { name, active } = body;

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

      // create the department
      await prisma.department.create({
        data: {
          active,
          name,
          created_by: get_user_details?.id,
          updated_by: get_user_details?.id,
          updated_at: new Date(),
          created_at: new Date(),
        },
      });

      // resolve
      return resolve({
        ...globalThis.status_codes?.success,
        message: "Department created successfully!",
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
