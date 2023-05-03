import { PrismaClient } from "@prisma/client";
import {
  ActivityLog,
  Configuration,
  Department,
  LibraryAwards,
  LibraryBadges,
  Refreshtoken,
  Role,
  RoleScreenMapping,
  Users,
} from "./seed/index";
const prisma = new PrismaClient();

const main = async () => {
  console.log("Seeding in Progress.....");
  await Role();
  await RoleScreenMapping();
  await Department();
  await Users();
  await ActivityLog();
  await Configuration();
  await LibraryAwards();
  await LibraryBadges();
  await Refreshtoken();
  console.log("Seeding Completed");
};
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
