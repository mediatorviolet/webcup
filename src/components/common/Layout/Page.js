import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledContainer = styled.div`
    padding-top: 5rem;
    padding-bottom: 5rem;
`;

const Page = ({ children, back = null }) => {
    return (
        <motion.div
            exit={{ opacity: 0, y: -50 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className='mb-5 pb-5'>
            <StyledContainer>
                <div className='container'>
                    <div className='d-flex justify-content-center'>
                        {back && (
                            <div className=''>
                                <Link
                                    to={back}
                                    className='btn me-3'
                                    style={{ padding: "15px 18px" }}>
                                    <i className='fa fa-arrow-left' />
                                </Link>
                            </div>
                        )}
                        <div className='col'>{children}</div>
                    </div>
                </div>
            </StyledContainer>
        </motion.div>
    );
};

export default Page;
