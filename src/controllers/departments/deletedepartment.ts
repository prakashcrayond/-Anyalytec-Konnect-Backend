import { PrismaClient } from "@prisma/client";
import { ResponseType } from "../../utils";
const prisma = new PrismaClient();

// interface of your payload
interface payload {
  id: number;
}

// update department function here
export const DeleteDepartment = (params: payload, headers: any) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      // get the payload
      const { id } = params;

      // create the department
      await prisma.department.delete({
        where: {
          id,
        },
      });

      // resolve
      return resolve({
        ...globalThis.status_codes?.success,
        message: "Department deleted successfully!",
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
