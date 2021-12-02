export const choicesData = [
    {
        step: 0,
        order: "Bienvenue ! Puisque tu viens d'intégrer l'équipe, il faut que tu fasses tes preuves ;)<br/>Clique sur la fiole qui te paraît la plus adaptée.",
        btnStart: "C'est parti !",
        firstChoice: {
            id: "purificatilium",
            img: "/assets/img/purificatilium.svg",
            seedAnimId: "seed1",
            triggerAnims: ["cat-died", "plants-1"],
            triggerSounds: ["cat-died"],
        },
        secondChoice: {
            id: "boostyflos",
            img: "/assets/img/boostyflos.svg",
            seedAnimId: "seed1",
            triggerAnims: ["cat-died", "plants-1"],
            triggerSounds: ["cat-died"],
        }
    },
    {
        step: 1,
        order: "Joli travail !<br/>Voilà ta nouvelle mission :<br/>dépêche-toi de faire ton choix, ces produits ne peuvent pas rester à l’air libre trop longtemps !",
        btnStart: "Go go go !",
        firstChoice: {
            id: "autonomie-8",
            img: "/assets/img/autonomie-8.svg",
            seedAnimId: "seed3",
            triggerAnims: ["clim", "crackles", "plants-2"],
            triggerSounds: ["clim"],
        },
        secondChoice: {
            id: "autonomie-4",
            img: "/assets/img/autonomie-4.svg",
            seedAnimId: "seed4",
            triggerAnims: ["", "plants-2"],
            triggerSounds: [""],
        }
    },
    {
        step: 2,
        order: "À présent, tu dois faire varier la composition des sérums grâce à la jauge pour créer le mélange parfait.",
        btnStart: "C'est noté !",
        firstChoice: {
            id: "serum-egale-egal-a-100",
            img: "",
            seedAnimId: "seed5",
            triggerAnims: ["plants-3"],
            triggerSounds: [""],
        },
        secondChoice: {
            id: "serum-plus-de-50",
            img: "",
            seedAnimId: "seed6",
            triggerAnims: ["plants-3"],
            triggerSounds: [""],
        },
        thirdChoice: {
            id: "serum-moins-de-50",
            img: "",
            seedAnimId: "seed7",
            triggerAnims: ["plants-3"],
            triggerSounds: [""],
        },
        fourChoice: {
            id: "serum-egal-a-0",
            img: "",
            seedAnimId: "seed8",
            triggerAnims: ["plants-3"],
            triggerSounds: [""],
        }
    },
    {
        step: 3,
        order: "On a perdu les étiquettes, un petit génie comme toi devrait savoir à gérer ça ! Sélectionne le bon sérum...",
        btnStart: "Allons-y !",
        firstChoice: {
            id: "serum-7",
            img: "",
            seedAnimId: "seed7",
            triggerAnims: ["plants-4"],
            triggerSounds: [""],
        },
        secondChoice: {
            id: "serum-8",
            img: "",
            seedAnimId: "seed8",
            triggerAnims: ["plants-4"],
            triggerSounds: [""],
        }
    },
]
