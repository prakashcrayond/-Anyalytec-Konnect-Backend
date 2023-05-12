import { PrismaClient } from "@prisma/client";
import { ResponseType } from "../../utils";
const prisma = new PrismaClient();

// interface of your payload
interface payload {
  id: number;
}

// delete department function here
export const DeleteDepartment = (body: payload, headers: any) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      // get the payload
      const { id } = body;

      // soft delete the department
      await prisma.department.update({
        where: {
          id: id,
        },
        data: {
          active: false,
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
