import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface payload {
  id: string;
}

export const getHashTagbyIDController = (query: payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      //get the payload
      const { id } = query;

      // get the admin panel
      let response = await prisma.hashtag.findUnique({
        where: {
          id: JSON.parse(id),
        },
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
      });

      let get_response = {
        id: response?.id,
        hashtagName: response?.hashtag_name,
        colorCode: response?.color_code,
        createdAt: response?.created_at,
        updatedAt: response?.updated_at,
        active: response?.active,
        createdBy: response?.users_hashtag_created_byTousers,
        updatedBy: response?.users_hashtag_updated_byTousers,
      };

      resolve(get_response);
    } catch (error: any) {
      console.log(error);
      reject({
        ...(globalThis.status_codes?.error ?? {}),
        message: error?.message,
      });
    }
  });
};
