import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const ActivityLog = async () => {
  await prisma.activity_log.createMany({
    data: [
      {
        id: 1,
        description: "System Administrator",
        type: "login",
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
  });
};
