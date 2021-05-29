import React from "react";
import styled from "styled-components";
import Section from "../Layout/Section";

const Footer = () => {
    return (
        <Section bgColor='var(--dark-blue)'>
            <div className='d-flex row justify-content-between'>
                <div className='col-12 col-md-4'>
                    <ul>
                        <li className='text-white'>Contact</li>
                        <li className='text-white'>Mentions légales</li>
                        <li className='text-white'>
                            Politique de confidentialité
                        </li>
                        <li className='text-white'>CGU</li>
                    </ul>
                </div>
                <div className='col-12 col-md-4'>
                    <ul>
                        <li className='text-white'>Les fermes</li>
                        <li className='text-white'>Les cryptomonnaies</li>
                        <li className='text-white'>
                            Obtenir un portefeuille électronique
                        </li>
                        <li className='text-white'>Partenaires</li>
                    </ul>
                </div>
                <div className='col-12 col-md-4'>
                    <ul>
                        <li className='text-white'>Labels</li>
                        <li className='text-white'>
                            Banque de France des cryptomonnaies
                        </li>
                        <li className='text-white'>
                            Législation sur la cryptomonnaie
                        </li>
                    </ul>
                </div>
                <div className='mt-5'>
                    <p className='fw-bold text-white text-center'>
                        Copyright Farmfunding Pëi 2035
                    </p>
                    <p className='fw-bold text-white text-center'>
                        Site réalisé par LES CHEVELUS
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Footer;
