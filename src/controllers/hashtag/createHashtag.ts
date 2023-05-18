import { PrismaClient } from "@prisma/client";
import { ResponseType } from "../../utils";
const prisma = new PrismaClient();

// interface of your payload
interface payload {
  hashtagName: string;
  colorCode: string;
  active: string;
}

// create hashtag function here
export const createHashTagController = (body: payload, headers: any) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      // get the payload
      const { hashtagName, colorCode, active } = body;

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

      // create the hashtag
      await prisma.hashtag.create({
        data: {
          color_code: colorCode,
          hashtag_name: hashtagName,
          active: JSON.parse(active),
          updated_at: new Date(),
          created_at: new Date(),
          created_by: get_user_details?.id,
          updated_by: get_user_details?.id,
        },
      });

      // resolve
      return resolve({
        ...globalThis.status_codes?.success,
        message: "Hash Tag created successfully!",
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
