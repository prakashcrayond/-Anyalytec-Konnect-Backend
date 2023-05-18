import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAdminPanelController = () => {
  return new Promise(async (resolve, reject) => {
    try {
      // get the admin panel
      const responses = await prisma.admin_panel.findMany({
        select: {
          id: true,
          color: true,
          financial_year: true,
          date_format: true,
          time_format: true,
          language: true,
          login_logo: true,
          header_logo: true,
          created_at: true,
          updated_at: true,
          created_by: true,
          updated_by: true,
          users_admin_panel_created_byTousers: {
            select: {
              id: true,
              firstname: true,
              lastname: true,
            },
          },
          users_admin_panel_updated_byTousers: {
            select: {
              id: true,
              firstname: true,
              lastname: true,
            },
          },
        },
      });

      let response = [];

      for (const element of responses) {
        response.push({
          id: element?.id,
          color: element?.color,
          financialYear: element?.financial_year,
          dateFormat: element?.date_format,
          timeFormat: element?.time_format,
          language: element?.language,
          loginLogoByte: { image: element?.login_logo, name: "LoginLogo" },
          headerLogoByte: { image: element?.header_logo, name: "HeaderLogo" },
          createdOn: element?.created_at,
          updatedAt: element?.updated_at,
          createdBy: {
            UserID: element?.users_admin_panel_created_byTousers?.id,
            fullName:
              element?.users_admin_panel_created_byTousers?.firstname +
              " " +
              element?.users_admin_panel_created_byTousers?.lastname,
          },
          updatedBy: {
            UserID: element?.users_admin_panel_updated_byTousers?.id,
            fullName:
              element?.users_admin_panel_updated_byTousers?.firstname +
              " " +
              element?.users_admin_panel_updated_byTousers?.lastname,
          },
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
