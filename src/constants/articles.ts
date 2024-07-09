import { images } from "./images";

interface descType {
  title: string;
  description: string;
}

export interface ArticleType {
  image: string;
  title: string;
  postedAt: string;
  desc: descType[];
}
export const articles: ArticleType[] = [
  {
    image: images.ARTICLE1,
    title: "Outils de maintenance et de réparation",
    postedAt: "05/03/2022",
    desc: [
      {
        title: "Clés et cliquets ",
        description:
          " Pour serrer et desserrer les écrous et boulons. Prix : 15 000 - 50 000 FCFA.",
      },
      {
        title: "Tournevis et tourne-écrous",
        description:
          " Pour visser et dévisser les vis et écrous. Prix : 5 000 - 20 000 FCFA.",
      },
      {
        title: "Pinces et coupe-fils",
        description:
          " Pour saisir, plier et couper les fils. Prix : 3 000 - 15 000 FCFA",
      },
    ],
  },
  {
    image: images.ARTICLE2,
    title: "Outils de diagnostic et de test",
    postedAt: "05/03/2022",
    desc: [
      {
        title: "Scanners OBD-II ",
        description:
          " Pour diagnostiquer les codes d'erreur de la voiture. Prix : 50 000 - 150 000 FCFA.",
      },
      {
        title: "Multimètres",
        description:
          " Pour mesurer tension, courant et résistance. Prix : 10 000 - 30 000 FCFA",
      },
      {
        title: "Testeurs de batterie  ",
        description:
          "  Pour vérifier la santé et la charge de la batterie. Prix : 20 000 - 60 000 FCFA.",
      },
    ],
  },
  {
    image: images.ARTICLE3,
    title: "Outils automobiles spécialisés",
    postedAt: "05/03/2022",
    desc: [
      {
        title: "Chariots élévateurs de moteur et supports ",
        description:
          " Pour soulever et maintenir les moteurs. Prix : 100 000 - 300 000 FCFA.",
      },
      {
        title: "Purgeurs de freins",
        description:
          " Pour éliminer les bulles d'air des conduites de frein. Prix : 25 000 - 75 000 FCFA.",
      },
      {
        title: "Démonte-pneus et équilibreuses de roues  ",
        description:
          "  Pour changer et équilibrer les pneus. Prix : 200 000 - 500 000 FCFA.",
      },
    ],
  },
];
