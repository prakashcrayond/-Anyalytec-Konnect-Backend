import { configuration } from "@prisma/client";
export const Configuration: { table: string; data: configuration[] } = {
  table: "configuration",
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
};
