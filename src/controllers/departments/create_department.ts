import { PrismaClient } from "@prisma/client";
import { ResponseType } from "../../utils";
const prisma = new PrismaClient();

// interface of your payload
interface payload {
  name: string;
  active: boolean;
}

// create department function here
export const CreateDepartment = (body: payload) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      // get the payload
      const { name, active } = body;

      await prisma.department.create({
        data: {
          active,
          name,
        },
      });

      return resolve({
        ...globalThis.status_codes?.success,
        message: "Department created successfully!",
      });
    } catch (error: any) {
      reject({
        ...globalThis.status_codes?.error,
        message: error?.message,
      });
    }
  });
};
