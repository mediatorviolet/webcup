import React from "react";
import styled from "styled-components";
import "../../../index.css";
import Loader from "../Loader";

const StyledBtn = styled.button`
    background-color: var(--${(props) => props.color});
    border-color: transparent;
    border-radius: 10px;
    padding: 1rem 3rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: var(--dark-blue);
    font-weight: bold;
    font-size: 20px;
`;

const ButtonSubmit = ({ text, icon, color, isLoading }) => {
    return (
        <StyledBtn type='submit' color={color}>
            {isLoading ? <Loader /> : 
            text}
            {icon && !isLoading && (
                <i
                    className={`fa fa-${icon} ms-2`}
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                />
            )}
        </StyledBtn>
    );
};

export default ButtonSubmit;
