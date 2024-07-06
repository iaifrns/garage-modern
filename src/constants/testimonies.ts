import { images } from "./images";

export interface TestimonyType {
  message: string;
  image: string;
  name: string;
  title: string;
}

export const testimonies: TestimonyType[] = [
  {
    message:
      "J'ai été impressionné par la rapidité et la qualité des services. Ma voiture n'a jamais été aussi performante. Merci pour votre professionnalisme !",
    image: images.CUSTOMER1,
    name: "Serge Mbala",
    title: "Customer",
  },
  {
    message:
      "Le service client est exceptionnel et les prix sont très abordables. Je recommande vivement à tous les propriétaires de voitures.",
    image: images.CUSTOMER2,
    name: "Nadège Ewodo",
    title: "Customer",
  },
];
