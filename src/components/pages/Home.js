import React from "react";
import { Link } from "react-router-dom";
import OwnProject from "../common/Banner/OwnProject";
import ButtonLink from "../common/Buttons/ButtonLink";
import Card from "../common/Card/Card";
import Page from "../common/Layout/Page";
import Section from "../common/Layout/Section";
import SectionTitle from "../common/Titles/SectionTtile";
import SubTitle from "../common/Titles/Subtitle";

const Home = ({ list }) => {
    return (
        <Page>
            <Section>
                <div className='col-12 col-md-6 p-4'>
                    <SectionTitle className='mb-5'>
                        La plateforme d'investissement <br /> dans les fermes de{" "}
                        <span style={{ color: "var(--green)" }}>
                            Cryptomonnaies Pëi
                        </span>
                    </SectionTitle>
                    <ButtonLink
                        text='Découvrir les fermes'
                        icon='arrow-right'
                        color='green'
                    />
                    <br />
                    <Link to='#crypto' className='anchor-link'>
                        Qu'est-ce qu'une cryptomonnaie ?
                    </Link>
                </div>
                <div className='col-12 col-md-6 p-4'>
                    <img
                        src='/assets/img/illustration1.svg'
                        style={{ height: "auto", width: "100%" }}
                    />
                </div>
            </Section>

            <Section>
                <SubTitle>Le concept</SubTitle>
                <div className='col-12 col-md-6 p-4'>
                    <img
                        src='/assets/img/icone_réunion.svg'
                        style={{ height: "auto", width: "100%" }}
                    />
                </div>
                <div className='col-12 col-md-6 p-4'>
                    <p>
                    Notre société a connu de nombreux changement lors de cette dernière décennie. Les cryptomonnaies régissent à présent les échanges, et ce, peu importe leurs natures. 
                    </p>
                    <p>
                    L’avantage des cryptomonnaies réside dans leur création qui se veut plus accessible que les monnaies dites “classiques” que nous connaissions encore il y a quelques années de cela.
                    </p>
                    <p>
                    En effet, pour générer de la cryptomonnaie, il faut créer des fermes de minages.
                    </p>
                    <p>
                    La Réunion bénéficie de plusieurs atouts, notamment d’ordre géographique pour la création de ces fermes.  Elle attire donc plusieurs projets de création de fermes de minage qui n’attendent que votre aide ! 
                    </p>
                    <p>
                    Sur FarmfundingPëi, engagez-vous dans des projets de création de fermes de minages en apportant du matériel, des matières premières ou votre aide sur le chantier. Une fois la ferme construite, vous recevrez l’équivalent de votre investissement en cryptomonnaie, générée par les fermes que vous aurez aidées à voir le jour. 
                    </p>
                </div>
            </Section>

            <Section bgColor='var(--gradient)'>
                <SubTitle color='white'>Les projets de fermes de minage</SubTitle>
                <div className='d-flex row justify-content-between mt-5'>
                    <Card farm={list[0]} />
                    <Card farm={list[1]} />
                    <Card farm={list[2]} />
                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <ButtonLink
                        text='Découvrir toutes les fermes'
                        icon='arrow-right'
                        color='white'
                    />
                </div>
            </Section>

            <Section>
                <div id='crypto'></div>
                <SubTitle>Qu'est-ce qu'une cryptomonnaie ?</SubTitle>
                <div className='col-12 col-md-6 p-4'>
                    <p>
                    Une cryptomonnaie est une devise électronique, ou virtuelle, car elle n'a aucune forme physique. Elle s'échange de pair à pair sur un système informatique décentralisé, ou blockchain, tenu à jour en permanence et (réputé) inviolable. Le code source d'une blockchain se base sur les principes de la cryptographie pour valider les transactions et émettre la monnaie elle-même.
                    </p>
                    <p>
                    Ce registre est ouvert et consultable par tous sur Internet. Il intègre les éléments constitutifs de chaque transaction réalisée : le montant de la transaction, l'adresse de l'émetteur, celle du destinataire, ainsi qu'une empreinte cryptographique. Malgré tout, chaque cryptomonnaie ayant son propre fonctionnement, pour certaines d'entre elles les transactions sont volontairement intraçables.
                    </p>
                </div>
                <div className='col-12 col-md-6 p-4'>
                    <img
                        src='/assets/img/undraw_nakamoto_2iv6.svg'
                        style={{ height: "auto", width: "100%" }}
                    />
                </div>
                <div className='col-12 col-md-6 p-4'>
                    <img
                        src='/assets/img/undraw_crypto_portfolio_2jy5.svg'
                        style={{ height: "auto", width: "100%" }}
                    />
                </div>
                <div className='col-12 col-md-6 p-4'>
                    <p>
                    Pour acheter une cryptomonnaie, le détenteur potentiel se rendra le plus souvent sur une plateforme de change en ligne. Une plateforme dont le sérieux et le professionnalisme s'apprécient au nombre de transactions qui s'y déroulent et au volume d'affaires réalisé, ainsi qu'à la nature des informations demandées aux potentiels acquéreurs.
                    </p>
                    <p>
                    Selon les configurations, les cryptomonnaies sont cessibles contre des biens, des services ou de l'argent. Sans pouvoir parler de "cours" stricto sensu, on notera que l'évolution de la valeur de la quasi-totalité des cryptomonnaies se caractérise par une très forte volatilité.
                    </p>
                </div>
            </Section>
        </Page>
    );
};

export default Home;
