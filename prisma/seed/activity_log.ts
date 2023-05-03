import { activity_log } from "@prisma/client";
export const ActivityLog: { table: string; data: activity_log[] } = {
  table: "activity_log",
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
};
