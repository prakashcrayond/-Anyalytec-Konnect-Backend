import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const Department = async () => {
  await prisma.department.createMany({
    data: [
      {
        id: 1,
        active: true,
        name: "Admin",
        created_by: null,
        updated_by: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
  });
};
