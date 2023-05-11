import { PrismaClient } from "@prisma/client";
import { ResponseType } from "../../utils";

const prisma = new PrismaClient();

// interface of your payload
interface Payload {
  id: number;
  active: boolean;
}

// update department status function here
export const UpdateDepartmentStatus = (
  params: Payload
): Promise<ResponseType> => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      // get the payload
      const { id, active } = params;

      // update the department
      await prisma.department.update({
        where: { id },
        data: {
          active,
        },
      });

      return resolve({
        ...(globalThis.status_codes?.success ?? {}),
        message: `Department ${
          active ? "activated" : "deactivated"
        } successfully!`,
      });
    } catch (error: any) {
      console.log(error);
      reject({
        ...(globalThis.status_codes?.error ?? {}),
        message: error?.message,
      });
    }
  });
};
