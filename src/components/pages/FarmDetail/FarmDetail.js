import React from "react";
import Page from "../../common/Layout/Page";
import Section from "../../common/Layout/Section";
import Progress from "../../common/Progress/Progress";
import SubTitle from "../../common/Titles/Subtitle";
import styled from "styled-components";
import Form from "../../common/Form/Form";

const RoundedImage = styled.div`
    border-radius: 20px;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    max-height: 280px;
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

const FarmDetail = ({ id, list }) => {
    let farm = list.find((el) => el.id === id);
    console.log(farm);

    let total = [];
    const globalStatus = () => {
        farm.needs.map((el) => {
            total.push(el.status);
        });
    };

    globalStatus();

    return (
        <Page>
            <Section>
                <SubTitle align='start'>{farm.name}</SubTitle>
                <div className='d-flex mt-2 mb-4'>
                    <h5 className='me-5'>
                        <i className='fa fa-map-marker-alt me-2' />
                        {farm.location}
                    </h5>
                    <h5>
                        <i className='fa fa-money-bill-wave-alt me-2' />
                        {farm.cryptoName}
                    </h5>
                </div>
                <div className='d-flex col-12'>
                    <RoundedImage
                        className='col-12 col-md-6'
                        image={farm.image}
                    />
                    <div className='col-12 col-md-6'>
                        <div className=' d-flex row justify-content-center ms-5'>
                            <Percentage>
                                <p>
                                    {Math.floor(
                                        total.reduce(
                                            (a, b) => a * 1 + b * 1,
                                            0
                                        ) / 3
                                    )}
                                    %
                                </p>
                            </Percentage>
                            <ul className='mt-4'>
                                {farm.needs.map((el, index) => (
                                    <li key={index} className='list-item'>
                                        {el.name}
                                        <Progress
                                            percentage={el.status}
                                            color={el.color}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <p className='mt-5'>{farm.content}</p>
            </Section>
            <Form />
        </Page>
    );
};

export default FarmDetail;
