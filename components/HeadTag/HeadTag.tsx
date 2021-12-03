import React from "react";

interface IHeadTag {
    title: string;
}

const HeadTag = ({ title }: IHeadTag) => (
    <>
        <title>{title}</title>
        <meta
            name="description"
            content="Depuis quelque temps, l’écosystème terrien rencontre des difficultés pour répondre aux besoins des humains. Pas toujours facile de maintenir des plantes en vie ! T’en as marre de devoir arroser tes plantes ? Tu aimerais qu’elles soient plus robustes ? Chez Labo Tanik'’, nous donnons à la plus petite des graines, les plus grands pouvoirs ! Grâce à tes études à la Haute École de la Botanique, tu es un élément moteur pour façonner des graines qui s’adaptent à la ville. Attention, certains de nos sérums sont encore un peu instables !"
        />
        <link rel="icon" href="/favicon.ico" />
    </>
)

export default HeadTag