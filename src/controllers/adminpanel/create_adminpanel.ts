import { PrismaClient } from "@prisma/client";
import { ResponseType } from "../../utils";
const prisma = new PrismaClient();

// interface of your payload
interface payload {
  color: string;
  financialYear: number;
  dateFormat: string;
  timeFormat: string;
  language: string;
  loginLogoByte: string;
  headerLogoByte: string;
}

// create department function here
export const createAdminPanelController = (body: payload, headers: any) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      // get the payload
      const {
        color,
        financialYear,
        dateFormat,
        timeFormat,
        language,
        loginLogoByte,
        headerLogoByte,
      } = body;

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

      // create the admin panel
      await prisma.admin_panel.create({
        data: {
          color,
          date_format: dateFormat,
          time_format: timeFormat,
          language,
          login_logo: loginLogoByte,
          header_logo: headerLogoByte,
          financial_year: financialYear,
          updated_at: new Date(),
          created_at: new Date(),
          created_by: get_user_details?.id,
          updated_by: get_user_details?.id,
        },
      });

      // resolve
      return resolve({
        ...globalThis.status_codes?.success,
        message: "Admin Panel created successfully!",
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