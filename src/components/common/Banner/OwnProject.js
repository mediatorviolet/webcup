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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                iaculis ut mauris id fermentum. Proin non eros eu arcu
                consectetur efficitur. Curabitur faucibus cursus risus vitae
                scelerisque. Fusce eget ante urna. Praesent suscipit a sem non
                convallis. Sed hendrerit aliquet urna vel viverra. Morbi lacus
                risus, pharetra vel feugiat sed, egestas sit amet sem.
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
