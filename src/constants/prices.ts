export interface PricesType {
    type : string,
    price: string,
    duration: string,
    desc: string,
    content: string[]
}

export const prices: PricesType[] = [
    {
        type: "Plan Classique",
        price: "100 000 FCFA",
        duration: "1 mois",
        desc: "Cours de base sur la mécanique automobile",
        content: []
    },
    {
        type: "Plan Avancé",
        price: "250 000 FCFA",
        duration: "3 mois",
        desc: " Formation approfondie sur la réparation moteur et électronique",
        content: []
    },
    {
        type: "Plan Classique",
        price: "500 000 FCFA",
        duration: "6 mois",
        desc: "Formation complète incluant diagnostic avancé et gestion",
        content: []
    },
]