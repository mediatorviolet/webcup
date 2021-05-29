import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
    return (
        <div className='container p-4'>
            <div className='col'>{children}</div>
        </div>
    );
};

export default Layout;
