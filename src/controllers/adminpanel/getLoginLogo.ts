import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getLoginLogoController = () => {
  return new Promise(async (resolve, reject) => {
    try {
      // get the admin panel
      const response = await prisma.admin_panel.findFirst({
        select: {
          login_logo: true,
        },
      });

      let res = {
        image: response?.login_logo,
        name: "LoginLogo",
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
