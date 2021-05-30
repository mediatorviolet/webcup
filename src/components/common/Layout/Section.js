import React from "react";
import styled from "styled-components";
import "../../../index.css";

const StyledSection = styled.section`
    padding: 3rem 20rem;
    min-height: 50vh;
    background: ${(props) => props.bgColor || ""};
    @media (max-width: 1080px) {
        padding: 3rem 10rem;
    }
`;

const Section = ({ children, bgColor = null }) => {
    return (
        <StyledSection bgColor={bgColor}>
            <div className='row d-flex py-5 align-items-center'>{children}</div>
        </StyledSection>
    );
};

export default Section;
