import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// interface of your payload
interface Payload {
  dept: number;
}

// create department function here
export const getUsersByDepartmentList = (params: Payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      // get the payload
      const { dept } = params;

      // get the active departments
      const get_user_details = await prisma.users.findMany({
        where: {
          department_id: dept,
        },
        select: {
          id: true,
          active: true,
          country_code: true,
          created_at: true,
          date_of_birth: true,
          date_of_joining: true,
          designation: true,
          email: true,
          enabled_reason: true,
          firstname: true,
          is_default: true,
          lastname: true,
          password: true,
          pic_name: true,
          project_tour: true,
          sig_name: true,
          telephone_number: true,
          updated_at: true,
          created_by: true,
          updated_by: true,
          username: true,
          department_users_department_idTodepartment: {
            select: {
              id: true,
              name: true,
              active: true,
            },
          },
          manager_id: true,
          role_users_role_idTorole: {
            select: {
              id: true,
              role_name: true,
              color_code: true,
              created_at: true,
              updated_at: true,
              admin_role: true,
              is_default: true,
            },
          },
        },
      });

      let response = [];

      for (const element of get_user_details) {
        response.push({
          id: element?.id,
          username: element?.username,
          firstname: element?.firstname,
          lastname: element?.lastname,
          email: element?.email,
          password: element?.password,
          designation: element?.designation,
          dateOfBirth: element?.date_of_birth,
          dateOfJoining: element?.date_of_joining,
          countryCode: element?.country_code,
          telephoneNumber: element?.telephone_number,
          active: element?.active,
          createdAt: element?.created_at,
          updatedAt: element?.updated_at,
          createdBy: element?.created_by,
          updatedBy: element?.updated_by,
          department: {
            id: element?.department_users_department_idTodepartment?.id,
            name: element?.department_users_department_idTodepartment?.name,
            active: element?.department_users_department_idTodepartment?.active,
          },
          role: {
            id: element?.role_users_role_idTorole?.id,
            roleName: element?.role_users_role_idTorole?.role_name,
            colorCode: element?.role_users_role_idTorole?.color_code,
            createdAt: element?.role_users_role_idTorole?.created_at,
            updatedAt: element?.role_users_role_idTorole?.updated_at,
            adminRole: element?.role_users_role_idTorole?.admin_role,
            default: element?.role_users_role_idTorole?.is_default,
          },
          enabledReason: element?.enabled_reason,
          manager: element?.manager_id,
          picName: element?.pic_name,
          sigName: element?.sig_name,
          projectTour: element?.project_tour,
          fullName: element?.firstname + " " + element?.lastname,
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