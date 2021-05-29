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
                <SubTitle>Le concept ?</SubTitle>
                <div className='col-12 col-md-6 p-4'>
                    <img
                        src='/assets/img/icone_réunion.svg'
                        style={{ height: "auto", width: "100%" }}
                    />
                </div>
                <div className='col-12 col-md-6 p-4'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam iaculis ut mauris id fermentum. Proin non eros eu
                        arcu consectetur efficitur. Curabitur faucibus cursus
                        risus vitae scelerisque. Fusce eget ante urna. Praesent
                        suscipit a sem non convallis. Sed hendrerit aliquet urna
                        vel viverra. Morbi lacus risus, pharetra vel feugiat
                        sed, egestas sit amet sem.
                    </p>
                    <p>
                        Nulla interdum ante rutrum euismod consequat.
                        Pellentesque ornare suscipit vulputate. Nulla libero
                        metus, imperdiet luctus ex ut, facilisis efficitur
                        metus. Praesent elementum lectus eget risus efficitur
                        tristique. Nullam non sodales justo. Vivamus blandit
                        eros eu gravida fringilla. Curabitur malesuada a orci
                        sed lobortis. Vestibulum quis facilisis quam.{" "}
                    </p>
                </div>
            </Section>

            <Section bgColor='var(--gradient)'>
                <SubTitle color='white'>Les projets de fermes</SubTitle>
                <div className='d-flex row justify-content-between mt-5'>
                    {list.map((el, index) => (
                        <Card key={index} farm={el} />
                    ))}
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam iaculis ut mauris id fermentum. Proin non eros eu
                        arcu consectetur efficitur. Curabitur faucibus cursus
                        risus vitae scelerisque. Fusce eget ante urna. Praesent
                        suscipit a sem non convallis. Sed hendrerit aliquet urna
                        vel viverra. Morbi lacus risus, pharetra vel feugiat
                        sed, egestas sit amet sem.
                    </p>
                    <p>
                        Nulla interdum ante rutrum euismod consequat.
                        Pellentesque ornare suscipit vulputate. Nulla libero
                        metus, imperdiet luctus ex ut, facilisis efficitur
                        metus. Praesent elementum lectus eget risus efficitur
                        tristique. Nullam non sodales justo. Vivamus blandit
                        eros eu gravida fringilla. Curabitur malesuada a orci
                        sed lobortis. Vestibulum quis facilisis quam.{" "}
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam iaculis ut mauris id fermentum. Proin non eros eu
                        arcu consectetur efficitur. Curabitur faucibus cursus
                        risus vitae scelerisque. Fusce eget ante urna. Praesent
                        suscipit a sem non convallis. Sed hendrerit aliquet urna
                        vel viverra. Morbi lacus risus, pharetra vel feugiat
                        sed, egestas sit amet sem.
                    </p>
                    <p>
                        Nulla interdum ante rutrum euismod consequat.
                        Pellentesque ornare suscipit vulputate. Nulla libero
                        metus, imperdiet luctus ex ut, facilisis efficitur
                        metus. Praesent elementum lectus eget risus efficitur
                        tristique. Nullam non sodales justo. Vivamus blandit
                        eros eu gravida fringilla. Curabitur malesuada a orci
                        sed lobortis. Vestibulum quis facilisis quam.{" "}
                    </p>
                </div>
            </Section>
        </Page>
    );
};

export default Home;
