import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const Role = async () => {
  await prisma.role.createMany({
    data: [
      {
        id: 1,
        admin_role: true,
        color_code: "#2c2c2c",
        is_default: false,
        role_name: "Admin",
        created_by: null,
        updated_by: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        admin_role: false,
        color_code: "#2c2c2c",
        is_default: true,
        role_name: "Employee",
        created_by: null,
        updated_by: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
  });
};
