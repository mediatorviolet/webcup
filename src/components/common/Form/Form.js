import React, { useState } from "react";
import styled from "styled-components";
import Section from "../Layout/Section";
import "../../../index.css";
import SubTitle from "../Titles/Subtitle";
import BtnOperator from "../Buttons/BtnOperator";
import ButtonLink from "../Buttons/ButtonLink";
import ButtonSubmit from "../Buttons/ButtonSubmit";
import Loader from "../Loader";

const FormContainer = styled.div`
    background-color: var(--dark-blue);
    border-radius: 20px;
    color: white;
    padding: 5rem 10rem;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: between;
    align-items: center;
    // margin-left: 9rem;
`;

const CustomInput = styled.input`
    width: 8rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
`;

const CustomHr = styled.hr`
    background-color: var(--green);
    padding: 0.1rem;
    opacity: 1;
`;

const Form = () => {
    const [formData, setFormData] = useState({
        computer: 0,
        rawMaterial: 0,
        workForce: 0,
        email: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormData({ ...formData, [name]: value });
    };

    const handlePlusBtn = () => {};

    const handleSubmit = (e) => {
        // e.preventDefault();
        setIsLoading(true);
    };

    return (
        <Section>
            <FormContainer>
                <SubTitle>Participez à ce projet !</SubTitle>
                <div className='mt-5'>
                    <p className='fw-bold mb-4'>
                        1. Choisissez ce que vous voulez donner
                    </p>
                    <label
                        htmlFor='computer'
                        className='d-flex justify-content-between mb-4'
                        style={{ lineHeight: "30px" }}>
                        Je donne du matériel informatique (unité) :
                        <InputContainer>
                            <BtnOperator
                                operator='minus'
                                onClick={() => {
                                    setFormData({
                                        ...formData,
                                        computer: --formData.computer,
                                    });
                                }}
                            />
                            <CustomInput
                                type='tel'
                                name='computer'
                                value={formData.computer}
                                onChange={handleChange}
                            />
                            <BtnOperator operator='plus' />
                        </InputContainer>
                    </label>
                    <label
                        htmlFor='rawMaterial'
                        className='d-flex justify-content-between mb-4'
                        style={{ lineHeight: "30px" }}>
                        Je donne de la matière première (unité) :
                        <InputContainer>
                            <BtnOperator operator='minus' />
                            <CustomInput
                                type='tel'
                                name='rawMaterial'
                                value={formData.rawMaterial}
                                onChange={handleChange}
                            />
                            <BtnOperator operator='plus' />
                        </InputContainer>
                    </label>
                    <label
                        htmlFor='workForce'
                        className='d-flex justify-content-between mb-4'
                        style={{ lineHeight: "30px" }}>
                        Je viens donner un coup de main (heure) :
                        <InputContainer>
                            <BtnOperator operator='minus' />
                            <CustomInput
                                type='tel'
                                name='workForce'
                                value={formData.workForce}
                                onChange={handleChange}
                            />
                            <BtnOperator operator='plus' />
                        </InputContainer>
                    </label>
                    <CustomHr />
                    <p>
                        TOTAL converti* en bitcoin :{" "}
                        <span className='fw-bold ms-2'>700</span>
                    </p>
                    <em className='text-muted'>
                        *Le calcul a été réalisé sur le cours du bitcoin en
                        temps réel grâce aux données fournies par la Banque de
                        France des cryptomonnaies.
                    </em>
                    <p className='fw-bold mb-4 mt-5'>
                        2. Restez informé lorsqu'il faudra passer à l'action !
                    </p>
                    <div className='d-flex row col-12 col-md-4 mb-5'>
                        <label htmlFor='email'>Votre email :</label>
                        <input
                            type='email'
                            className='ms-2 mt-2'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <ButtonSubmit
                            color='green'
                            text='Je confirme ma promesse de don'
                            icon='arrow-right'
                            isLoading={isLoading}
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </FormContainer>
        </Section>
    );
};

export default Form;
