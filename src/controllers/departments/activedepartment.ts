import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// interface of your payload
interface Payload {
  active: boolean;
}

// create department function here
export const GetAllDepartments = (params: Payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      // get the payload
      const { active } = params;

      // get the active departments
      const departments = await prisma.department.findMany({
        where: {
          active: active,
        },
        select: {
          id: true,
          name: true,
          updated_at: true,
          created_at: true,
          users_department_created_byTousers: {
            select: {
              id: true,
              active: true,
              email: true,
              username: true,
              firstname: true,
              lastname: true,
            },
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
          },
          users_users_department_idTodepartment: {
            select: {
              id: true,
              username: true,
              firstname: true,
              lastname: true,
            },
          },
        },
      });

      let response = [];

      for (const element of departments) {
        response.push({
          id: element.id,
          name: element.name,
          updatedAt: element.updated_at,
          createdAt: element.created_at,
          createdBy: element?.users_department_created_byTousers,
          updatedBy: element?.users_department_updated_byTousers,
          users: element?.users_users_department_idTodepartment?.map((v) => ({
            id: v?.id,
            username: v?.username,
            fullName: `${v?.firstname} ${v?.lastname}`,
          })),
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
