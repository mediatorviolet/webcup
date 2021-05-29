import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../../index.css";

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

const ButtonLink = ({ text, icon, color }) => {
    return (
        <Link to='/farm'>
            <StyledBtn color={color}>
                {text}
                {icon && (
                    <i
                        className={`fa fa-${icon} ms-2`}
                        style={{ fontSize: "20px", fontWeight: "bold" }}
                    />
                )}
            </StyledBtn>
        </Link>
    );
};

export default ButtonLink;
