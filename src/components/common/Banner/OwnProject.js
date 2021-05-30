import React from "react";
import Section from "../Layout/Section";
import SubTitle from "../Titles/Subtitle";
import ButtonLink from "../Buttons/ButtonLink";

const OwnProject = () => {
    return (
        <Section bgColor='var(--blue)'>
            <SubTitle color='white'>
                Envie de lancer un projet de farmfunding ?
            </SubTitle>
            <p className='text-white text-center mt-5'>
                Vous avez un projet de création de ferme de minage pour générer
                une cryptomonnaie de votre choix, mais vous avez besoin d’aide
                sur le plan matériel ou humain ? Ne scrollez plus (en même
                temps, après il n’y a plus rien...) ! Vous êtes au bon endroit.{" "}
            </p>
            <p className='text-white text-center fw-bold'>
                Laissez-nous votre email et nous vous recontacterons très vite
                afin de vous accompagner dans votre projet. Ainsi, nous pourrons
                créer ensemble votre fiche de farmfunding.
            </p>
            <div className='d-flex justify-content-center'>
                <ButtonLink
                    text='Je crée mon projet'
                    icon='arrow-right'
                    color='white'
                />
            </div>
        </Section>
    );
};

export default OwnProject;
