import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// interface of your payload
interface Payload {
  id: string;
}

// get UsersByDepartmentList function here
export const getUsersByIDController = (query: Payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      // get the payload
      const { id } = query;

      // get users by department
      const get_user_details: any = await prisma.users.findUnique({
        where: {
          id: JSON.parse(id),
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

      let getCreatedByUser;

      //find the createdby user
      if (get_user_details.created_by) {
        getCreatedByUser = await prisma.users.findUnique({
          where: {
            id: get_user_details?.created_by,
          },
          select: {
            firstname: true,
            lastname: true,
          },
        });
      }

      let getUpdatedByUser;

      //find the updatedby user
      if (get_user_details.updated_by) {
        getUpdatedByUser = await prisma.users.findUnique({
          where: {
            id: get_user_details?.updated_by,
          },
          select: {
            firstname: true,
            lastname: true,
          },
        });
      }

      let response = {
        id: get_user_details?.id,
        username: get_user_details?.username,
        firstname: get_user_details?.firstname,
        lastname: get_user_details?.lastname,
        email: get_user_details?.email,
        password: get_user_details?.password,
        designation: get_user_details?.designation,
        dateOfBirth: get_user_details?.date_of_birth,
        dateOfJoining: get_user_details?.date_of_joining,
        countryCode: get_user_details?.country_code,
        telephoneNumber: get_user_details?.telephone_number,
        active: get_user_details?.active,
        createdAt: get_user_details?.created_at,
        updatedAt: get_user_details?.updated_at,
        createdBy: get_user_details?.created_by,
        updatedBy: get_user_details?.updated_by,
        department: {
          id: get_user_details?.department_users_department_idTodepartment?.id,
          name: get_user_details?.department_users_department_idTodepartment
            ?.name,
          active:
            get_user_details?.department_users_department_idTodepartment
              ?.active,
        },
        role: {
          id: get_user_details?.role_users_role_idTorole?.id,
          roleName: get_user_details?.role_users_role_idTorole?.role_name,
          colorCode: get_user_details?.role_users_role_idTorole?.color_code,
          createdAt: get_user_details?.role_users_role_idTorole?.created_at,
          updatedAt: get_user_details?.role_users_role_idTorole?.updated_at,
          adminRole: get_user_details?.role_users_role_idTorole?.admin_role,
          default: get_user_details?.role_users_role_idTorole?.is_default,
        },
        enabledReason: get_user_details?.enabled_reason,
        manager: get_user_details?.manager_id,
        picName: get_user_details?.pic_name,
        imageByte: "",
        sigName: get_user_details?.sig_name,
        signatureByte: "",
        createdUser: getCreatedByUser?.firstname
          ? getCreatedByUser?.firstname + " " + getCreatedByUser?.lastname
          : null,
        updatedUser: getUpdatedByUser?.firstname
          ? getUpdatedByUser?.firstname + " " + getUpdatedByUser?.lastname
          : null,
        projectTour: get_user_details?.project_tour,
        tour: "",
        default: get_user_details?.is_default,
        fullName:
          get_user_details?.firstname + " " + get_user_details?.lastname,
      };

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
