import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getHashTagController = () => {
  return new Promise(async (resolve, reject) => {
    try {
      // get the admin panel
      let responses = await prisma.hashtag.findMany({
        select: {
          id: true,
          hashtag_name: true,
          color_code: true,
          created_at: true,
          updated_at: true,
          active: true,
          users_hashtag_created_byTousers: {
            select: {
              id: true,
              username: true,
              firstname: true,
              email: true,
              active: true,
            },
          },
          users_hashtag_updated_byTousers: {
            select: {
              id: true,
              username: true,
              firstname: true,
              email: true,
              active: true,
            },
          },
        },
        orderBy: {
          id: "asc",
        },
      });

      let response = [];

      for (const element of responses) {
        response.push({
          id: element?.id,
          hashtagName: element?.hashtag_name,
          colorCode: element?.color_code,
          createdAt: element?.created_at,
          updatedAt: element?.updated_at,
          active: element?.active,
          createdBy: element?.users_hashtag_created_byTousers,
          updatedBy: element?.users_hashtag_updated_byTousers,
        });
      }

      resolve(response);
    } catch (error: any) {
      console.log(error);
      reject({
        ...(globalThis.status_codes?.error ?? {}),
        message: error?.message,
      });
    }
  });
};
