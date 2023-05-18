import { PrismaClient } from "@prisma/client";
import { ResponseType } from "../../utils";
const prisma = new PrismaClient();

// interface of your payload
interface payload {
  id: string;
  hashtagName: string;
  colorCode: string;
  active: string;
}

// update hashtag function here
export const updateHashTagController = (body: payload, headers: any) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      // get the payload
      const { id, hashtagName, colorCode, active } = body;

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

      // update the hashtag
      await prisma.hashtag.update({
        where: {
          id: JSON.parse(id),
        },
        data: {
          color_code: colorCode,
          hashtag_name: hashtagName,
          active: JSON.parse(active),
          updated_at: new Date(),
          updated_by: get_user_details?.id,
        },
      });

      // resolve
      return resolve({
        ...globalThis.status_codes?.success,
        message: "Hash Tag updated successfully!",
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
