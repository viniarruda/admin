import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;    
    box-shadow: 0px 4px 20px #cfcfcf;
    background: linear-gradient(45deg,#0d9eb2,#56dbee);
    position: ${props => props.fixed ? 'fixed' : 'relative'};
`;

const Right = styled.nav`
    flex: 1;
    text-align: right;
`;

const Title = styled.h1`
    margin: 0;
    color: #000;
    font-weight: 600;
`;

const NavBar = (props) => (
    <Nav>
        <Title>{props.title || ''}</Title>
        <Right>
            {props.children}
        </Right>
    </Nav>
);

export default NavBar;