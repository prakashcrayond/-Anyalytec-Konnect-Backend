import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const LibraryAwards = async () => {
  await prisma.library_awards.createMany({
    data: [
      {
        id: 1,
        file_name: new Date() + ".842050500_Patronum.svg",
        name: "Patronum",
      },
      {
        id: 2,
        file_name: new Date() + ".971260700_Team Infinity.svg",
        name: "Team Infinity",
      },
      {
        id: 3,
        file_name: new Date() + ".097288700_Gold Star.svg",
        name: "Gold Star",
      },
      {
        id: 4,
        file_name: new Date() + ".233145400_Picasso.svg",
        name: "Picasso",
      },
      {
        id: 5,
        file_name: new Date() + ".383963700_Premier.svg",
        name: "Premier",
      },
      {
        id: 6,
        file_name: new Date() + ".512615200_League Heroes.svg",
        name: "League Heroes",
      },
      {
        id: 7,
        file_name: new Date() + ".656161300_Shining Star.svg",
        name: "Shining Star",
      },
      {
        id: 8,
        file_name: new Date() + ".819252300_Legendary.svg",
        name: "Legendary",
      },
      {
        id: 9,
        file_name: new Date() + ".946444400_Omega.svg",
        name: "Omega",
      },
      {
        id: 10,
        file_name: new Date() + ".103306800_Dark Knight.svg",
        name: "Dark Knight",
      },
      {
        id: 11,
        file_name: new Date() + ".257459800_Maestro.svg",
        name: "Maestro",
      },
      {
        id: 12,
        file_name: new Date() + ".429938_Budding Star.svg",
        name: "Budding Star",
      },
      {
        id: 13,
        file_name: new Date() + ".561286_Rockstar Rookie.svg",
        name: "Rockstar Rookie",
      },
      {
        id: 14,
        file_name: new Date() + ".691062_Leviosa.svg",
        name: "Leviosa",
      },
      {
        id: 15,
        file_name: new Date() + ".827899500_Super Squad.svg",
        name: "Super Squad",
      },
      {
        id: 16,
        file_name: new Date() + ".994156600_Wizard.svg",
        name: "Wizard",
      },
      {
        id: 17,
        file_name: new Date() + ".143058_All Star.svg",
        name: "All Star",
      },
      {
        id: 18,
        file_name: new Date() + ".276662700_Performer.svg",
        name: "Performer",
      },
      {
        id: 19,
        file_name: new Date() + ".421678700_Transformer.svg",
        name: "Transformer",
      },
      {
        id: 20,
        file_name: new Date() + ".559006600_Inspirer.svg",
        name: "Inspirer",
      },
      {
        id: 21,
        file_name: new Date() + ".686308600_Albus Dumbledore.svg",
        name: "Albus Dumbledore",
      },
    ],
  });
};
