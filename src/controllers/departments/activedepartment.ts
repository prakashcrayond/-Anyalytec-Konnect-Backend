import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// interface of your payload
interface payload {
  active: boolean;
}

// interface updatedBy {
//   id: number;
//   active: boolean;
//   email: string;
//   username: string;
//   firstname: string;
//   lastname: string;
// }

// interface user {
//   id: number;
//   username: string;
//   fullname: string;
// }

// interface customdepartment  {
//   id: number;
//   active: boolean;
//   name: string;
//   created_at: Date;
//   updated_at: Date;
//   updatedBy: updatedBy;
//   createdBy: updatedBy;
//   users: user;
//   created_by: number;
//   updated_by: number;
// }

// create department function here
export const UpdateActiveDepartment = (params: payload, headers: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      // get the payload
      const { active } = params;

      // get the active department's
      const get_department = await prisma.department.findMany({
        where: {
          active: active,
        },
        select: {
          id: true,
          name: true,
          updated_at: true,
          created_at: true,
          // updated_by: true,
          users_department_created_byTousers: {
            select: {
              id: true,
              active: true,
              email: true,
              username: true,
              firstname: true,
              lastname: true,
            },
            // Add alias using "as" keyword
            //   as: "createdBy",
          },
          users_department_updated_byTousers: {
            select: {
              id: true,
              active: true,
              email: true,
              username: true,
              firstname: true,
              lastname: true,
            },
            //   as: "updatedBy",
          },
          users_users_department_idTodepartment: {
            select: {
              id: true,
              username: true,
              // Add aliases using field name and "as" keyword
              // fullName: {
              //   select: {
              firstname: true,
              lastname: true,
              //   },
              // Provide an alias using "as" keyword
              //   as: "fullName",
            },
          },
        },
      });

      return resolve(get_department);
    } catch (error: any) {
      console.log(error);
      reject({
        ...globalThis.status_codes?.error,
        message: error?.message,
      });
    }
  });
};
