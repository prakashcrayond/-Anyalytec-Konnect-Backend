import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const LibraryBadges = async () => {
  await prisma.library_badges.createMany({
    data: [
      {
        id: 1,
        file_name: new Date() + ".773634100_Innovation.svg",
        name: "Innovation",
      },
      {
        id: 2,
        file_name: new Date() + ".355686100_Elite.svg",
        name: "Elite",
      },
      {
        id: 3,
        file_name: new Date() + ".498978700_Innovator.svg",
        name: "Innovator",
      },
      {
        id: 4,
        file_name: new Date() + ".623946100_Premier.svg",
        name: "Premier",
      },
      {
        id: 5,
        file_name: new Date() + ".756388700_Leader.svg",
        name: "Leader",
      },
      {
        id: 6,
        file_name: new Date() + ".890763500_Solver.svg",
        name: "Solver",
      },
      {
        id: 7,
        file_name: new Date() + ".016588600_Performer.svg",
        name: "Performer",
      },
      {
        id: 8,
        file_name: new Date() + ".149007100_Team Builder.svg",
        name: "Team Builder",
      },
      {
        id: 9,
        file_name: new Date() + ".276364500_Team Charger.svg",
        name: "Team Charger",
      },
      {
        id: 10,
        file_name: new Date() + ".415586200_Explorer.svg",
        name: "Explorer",
      },
      {
        id: 11,
        file_name: new Date() + ".558338900_Quality.svg",
        name: "Quality",
      },
      {
        id: 12,
        file_name: new Date() + ".687494_Achiever.svg",
        name: "Achiever",
      },
    ],
  });
};
