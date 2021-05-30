import React from "react";
import { Link } from "react-router-dom";
import Page from "../../common/Layout/Page";
import Card from "../../common/Card/Card";
import Section from "../../common/Layout/Section";
import SubTitle from "../../common/Titles/Subtitle";

const FarmList = ({ list }) => {
    return (
        <Page>
            <Section>
                <SubTitle>Les projets de fermes à cryptomonnaie</SubTitle>
                <p className='text-center my-5'>
                Découvrez tous les projets de ferme de minage disponibles sur notre plateforme. Nous mettons en avant l’énergie qui sera utilisée pour miner la cryptomonnaie en question afin que vous puissiez prendre en compte ce paramètre écologique dans votre choix.  
                </p>
                <div className='d-flex row justify-content-between mt-5'>
                    {list.map((el, index) => (
                        <Card key={index} farm={el} />
                    ))}
                </div>
            </Section>
        </Page>
    );
};

export default FarmList;
