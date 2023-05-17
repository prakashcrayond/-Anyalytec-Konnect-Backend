import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getHeaderLogoController = () => {
  return new Promise(async (resolve, reject) => {
    try {
      // get the admin panel
      const response = await prisma.admin_panel.findFirst({
        select: {
          header_logo: true,
        },
      });

      let res = {
        image: response?.header_logo,
        name: "HeaderLogo",
      };

      resolve(res);
    } catch (error: any) {
      console.log(error);
      reject({
        ...(globalThis.status_codes?.error ?? {}),
        message: error?.message,
      });
    }
  });
};
