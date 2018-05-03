import React from 'react';
import styled from 'styled-components';

const Bread = styled.div`
    padding: 15px 15px;
    width: 100%;
    position: relative;
    height: auto;
    margin: 20px;
    margin-bottom: -5px;
    font-size: 20px;
    color: #303030;
    border-radius: 3px;
    border: none;
    text-align: left;
    box-shadow: 5px 5px 20px rgba(0,0,0,0.2);
    background-color: #ffffff;    
    transition: box-shadow 0.3s ease-in-out;
    &:hover{
        box-shadow: 10px 10px 20px rgba(0,0,0,0.2);
    }
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

const Breadcrumb = (props) => (
    <Bread>
        <Title>{props.title || ''}</Title>
        <Right>
            {props.children || ''}
        </Right>
    </Bread>
);

export default Breadcrumb