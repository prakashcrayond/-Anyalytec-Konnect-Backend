import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const Configuration = async () => {
  await prisma.configuration.createMany({
    data: [
      {
        name: "anniversary_schedule_time",
        value: "06:00 AM",
        created_by: null,
        updated_by: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "birthday_schedule_time",
        value: "06:30 AM",
        created_by: null,
        updated_by: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
  });
};
