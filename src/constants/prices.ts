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
        duration: "3 mois",
        desc: "Cours de base sur la mécanique automobile",
        content: [
            "lubrification et refroidissement",
            "allumage et carburant",
            "transmission et embrayage",
            "freins et pneus"
        ]
    },
    {
        type: "Plan Avancé",
        price: "550 000 FCFA",
        duration: "1 ans",
        desc: " Formation approfondie sur la réparation moteur et électronique",
        content: [
            "agent de service clientele",
            "controleur technique automobile",
            "depaneur remorqueur",
            "technicien apres vente"
        ]
    },
    {
        type: "Plan Pro",
        price: "1 500 000 FCFA",
        duration: "2 ans",
        desc: "Formation complète incluant diagnostic avancé et gestion",
        content: [
            "contoleur technique automobile",
            "tchnicien apres vente",
            "mecatronique",
            "mecanicien automobile et carrossier peintre"
        ]
    },
]