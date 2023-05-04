import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const LibraryAwards = async () => {
  await prisma.library_awards.createMany({
    data: [
      {
        id: 1,
        file_name: new Date().toISOString() + ".842050500_Patronum.svg",
        name: "Patronum",
      },
      {
        id: 2,
        file_name: new Date().toISOString() + ".971260700_Team Infinity.svg",
        name: "Team Infinity",
      },
      {
        id: 3,
        file_name: new Date().toISOString() + ".097288700_Gold Star.svg",
        name: "Gold Star",
      },
      {
        id: 4,
        file_name: new Date().toISOString() + ".233145400_Picasso.svg",
        name: "Picasso",
      },
      {
        id: 5,
        file_name: new Date().toISOString() + ".383963700_Premier.svg",
        name: "Premier",
      },
      {
        id: 6,
        file_name: new Date().toISOString() + ".512615200_League Heroes.svg",
        name: "League Heroes",
      },
      {
        id: 7,
        file_name: new Date().toISOString() + ".656161300_Shining Star.svg",
        name: "Shining Star",
      },
      {
        id: 8,
        file_name: new Date().toISOString() + ".819252300_Legendary.svg",
        name: "Legendary",
      },
      {
        id: 9,
        file_name: new Date().toISOString() + ".946444400_Omega.svg",
        name: "Omega",
      },
      {
        id: 10,
        file_name: new Date().toISOString() + ".103306800_Dark Knight.svg",
        name: "Dark Knight",
      },
      {
        id: 11,
        file_name: new Date().toISOString() + ".257459800_Maestro.svg",
        name: "Maestro",
      },
      {
        id: 12,
        file_name: new Date().toISOString() + ".429938_Budding Star.svg",
        name: "Budding Star",
      },
      {
        id: 13,
        file_name: new Date().toISOString() + ".561286_Rockstar Rookie.svg",
        name: "Rockstar Rookie",
      },
      {
        id: 14,
        file_name: new Date().toISOString() + ".691062_Leviosa.svg",
        name: "Leviosa",
      },
      {
        id: 15,
        file_name: new Date().toISOString() + ".827899500_Super Squad.svg",
        name: "Super Squad",
      },
      {
        id: 16,
        file_name: new Date().toISOString() + ".994156600_Wizard.svg",
        name: "Wizard",
      },
      {
        id: 17,
        file_name: new Date().toISOString() + ".143058_All Star.svg",
        name: "All Star",
      },
      {
        id: 18,
        file_name: new Date().toISOString() + ".276662700_Performer.svg",
        name: "Performer",
      },
      {
        id: 19,
        file_name: new Date().toISOString() + ".421678700_Transformer.svg",
        name: "Transformer",
      },
      {
        id: 20,
        file_name: new Date().toISOString() + ".559006600_Inspirer.svg",
        name: "Inspirer",
      },
      {
        id: 21,
        file_name: new Date().toISOString() + ".686308600_Albus Dumbledore.svg",
        name: "Albus Dumbledore",
      },
    ],
  });
};
