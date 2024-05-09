import React from 'react';
import styled from 'styled-components';

const Titanio = styled.h1`
color: #F5F5F4;
text-align: center;
font-family: "Poppins", sans-serif;
font-size: clamp(1.25rem, 0.688rem + 2.569vw, 3rem);
font-style: normal;
font-weight: 600;
line-height: 150.045%; /* 72.022px */
letter-spacing: 0.96px;
`;


const Header = () => {
    return (
        <Titanio>
            TITÂNIO
        </Titanio>
    );
};

export default Header;