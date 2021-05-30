import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../../index.css";

const StyledCard = styled.div`
    width: 25rem;
    border: 5px solid white;
    border-radius: 20px;
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.25);
    transition: transform ease-in-out 0.2s;
    // cursor: pointer;
    padding: 0;
    & img {
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
    &:hover {
        transform: scale(1.01);
    }
`;
const CardTitle = styled.h5`
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
`;

const Percentage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background-color: var(--dark-blue);
    & p {
        color: white;
        margin: 0;
        font-weight: 700;
        font-size: 30px;
        line-height: 37px;
    }
`;

const Tag = styled.div`
    padding: 0.7rem 0.4rem;
    border-radius: 10px;
    background-color: ${(props) => props.color};
    text-align: center;
    font-size: 10px;
    line-height: 12px;
    font-weight: 700;
    color: white;
`;

const Card = ({ farm }) => {
    let total = [];
    const globalStatus = () => {
        farm.needs.map((el) => {
            total.push(el.status);
        });
    };

    globalStatus();

    return (
        <StyledCard className='card'>
            <img src={farm.image} className='card-img-top' alt='Illustration' />
            <div className='card-body row align-items-center'>
                <div className='col-8'>
                    <CardTitle className='card-title'>{farm.name}</CardTitle>
                    <div className='d-flex justify-content-between'>
                        <p>
                            <i className='fa fa-map-marker-alt me-2' />
                            {farm.location}
                        </p>
                        <p>
                            <i className='fa fa-money-bill-wave-alt me-2' />
                            {farm.cryptoName}
                        </p>
                    </div>
                    <p className='card-text'>{farm.content.substr(0, 15)}...</p>
                    <p className='card-text mb-2'>Besoin en :</p>
                </div>
                <div className='col-4 d-flex justify-content-center'>
                    <Percentage>
                        <p>{Math.floor(total.reduce((a, b) => a * 1 + b * 1, 0) / total.length)}%</p>
                    </Percentage>
                </div>
                <div className='d-flex justify-content-between'>
                    {farm.needs.map((el, index) => (
                        <Tag key={index} color={`var(--${el.color})`}>
                            {el.name}
                        </Tag>
                    ))}
                </div>
                <Link
                    to={`farm/${farm.id}`}
                    className='mt-4 fw-bold anchor-link'>
                    En savoir plus <i className='fa fa-arrow-right ms-2' />
                </Link>
            </div>
        </StyledCard>
    );
};

export default Card;
