import React from "react";
import styled from "styled-components";
import "../../../index.css";

const Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: transparent;
    border-radius: 100%;
    height: 2rem;
    width: 2rem;
    background-color: var(--green);
    & i {
        font-size: 1.3rem;
    }
`;

const BtnOperator = ({operator}) => {
    return (
        <Btn>
            <i className={`fa fa-${operator}`} />
        </Btn>
    );
};

export default BtnOperator;
