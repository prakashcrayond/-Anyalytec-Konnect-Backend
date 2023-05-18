import { PrismaClient } from "@prisma/client";
import { ResponseType } from "../../utils";
const prisma = new PrismaClient();

// Bulk update hashtag function here
export const updateBulkHashTagController = (body: any, headers: any) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      // get the payload
      const { hashtag, active } = body;

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

      //   console.log("=========>", hashtag?.value, active?.value);

      // update the hashtag
      await prisma.hashtag.updateMany({
        where: {
          id: {
            in: JSON.parse(hashtag?.value),
          },
        },
        data: {
          active: JSON.parse(active?.value),
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
