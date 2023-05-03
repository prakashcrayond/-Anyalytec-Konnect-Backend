import { refreshtoken } from "@prisma/client";
export const Refreshtoken: { table: string; data: refreshtoken[] } = {
  table: "refreshtoken",
  data: [
    {
      id: 1,
      expiry_date: new Date(),
      token: "4dc1488c-7057-4331-9c37-9c6028509636",
      user_id: 1,
    },
  ],
};
