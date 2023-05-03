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
} from "./seed";
const prisma = new PrismaClient();

const main = async () => {
  console.log("Seeding in Progress.....");
  await ActivityLog();
  await Configuration();
  await Department();
  await LibraryAwards();
  await LibraryBadges();
  await Refreshtoken();
  await RoleScreenMapping();
  await Role();
  await Users();
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
