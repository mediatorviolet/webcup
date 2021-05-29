import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../../index.css";

const StyledNav = styled.nav`
    width: 75%;
    margin-top: 2rem;
    background-color: var(--dark-blue);
    border-radius: 20px;
    padding: 0.2rem 5rem;
`;

const Navbar = ({ item }) => {
    return (
        <div className='d-flex justify-content-center'>
            <StyledNav className='navbar navbar-expand-lg navbar-dark'>
                <div className='container-fluid'>
                    <Link to='/' className='navbar-brand'>
                        Farmfunding Pëi
                    </Link>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className='collapse navbar-collapse'
                        id='navbarSupportedContent'>
                        <div className='w-100 d-flex justify-content-center'>
                            <ul className='navbar-nav me-5 mb-2 mb-lg-0'>
                                {item.map((el, index) => (
                                    <li className='nav-item me-2' key={index}>
                                        <Link to={el.path} className='nav-link'>
                                            {el.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </StyledNav>
        </div>
    );
};

export default Navbar;
