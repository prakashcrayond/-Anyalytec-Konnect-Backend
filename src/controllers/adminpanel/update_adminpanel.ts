import { PrismaClient } from "@prisma/client";
import { ResponseType } from "../../utils";
const prisma = new PrismaClient();

// interface of your payload
interface payload {
  id: number;
  color: string;
  financialYear: number;
  dateFormat: string;
  timeFormat: string;
  language: string;
  loginLogoByte: string;
  headerLogoByte: string;
}

// create department function here
export const updateAdminPanelController = (body: payload, headers: any) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      // get the payload
      const {
        id,
        color,
        financialYear,
        dateFormat,
        timeFormat,
        language,
        loginLogoByte,
        headerLogoByte,
      } = body;

      //   // get header token expand
      //   const { sub } = headers?.userDetails;

      //   // find the user
      //   const get_user_details = await prisma.users.findUnique({
      //     where: {
      //       username: sub,
      //     },
      //     select: {
      //       id: true,
      //     },
      //   });

      // update the admin panel
      await prisma.admin_panel.update({
        where: {
          id,
        },
        data: {
          color,
          date_format: dateFormat,
          time_format: timeFormat,
          language,
          login_logo: loginLogoByte,
          header_logo: headerLogoByte,
          financial_year: financialYear,
          updated_at: new Date(),
        },
      });

      // resolve
      return resolve({
        ...globalThis.status_codes?.success,
        message: "Admin Panel updated successfully!",
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
