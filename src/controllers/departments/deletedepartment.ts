import { PrismaClient } from "@prisma/client";
import { ResponseType } from "../../utils";
const prisma = new PrismaClient();

// interface of your payload
interface payload {
  id: any;
}

// delete department function here
export const DeleteDepartment = (query: payload, headers: any) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      // get the payload
      const { id } = query;

      // soft delete the department
      await prisma.department.update({
        where: {
          id: JSON.parse(id),
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
