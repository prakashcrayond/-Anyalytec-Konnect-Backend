import { PrismaClient } from "@prisma/client";
import { ResponseType } from "../../utils";
const prisma = new PrismaClient();

// interface of your payload
interface payload {
  id: number;
  name: string;
  active: boolean;
}

// update department function here
export const UpdateDepartment = (body: payload, headers: any) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      // get the payload
      const { id, name, active } = body;

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
      await prisma.department.update({
        where: {
          id,
        },
        data: {
          active,
          name,
          updated_by: get_user_details?.id,
          updated_at: new Date(),
        },
      });

      // resolve
      return resolve({
        ...globalThis.status_codes?.success,
        message: "Department updated successfully!",
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
