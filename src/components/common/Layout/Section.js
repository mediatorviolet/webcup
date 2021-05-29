import React from 'react'
import styled from 'styled-components'
import '../../../index.css'

const StyledSection = styled.section`
    // padding: 5rem 2rem;
    min-height: 50vh;
`

const Section = ({children}) => {
    return (
        <StyledSection>
            {children}
        </StyledSection>
    )
}

export default Section