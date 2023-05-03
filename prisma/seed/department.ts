import { department } from "@prisma/client";
export const Department: { table: string; data: department[] } = {
  table: "department",
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
};
