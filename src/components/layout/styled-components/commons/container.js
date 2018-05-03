import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 83%;
    flex-direction: ${props => props.row ? 'row' : 'column'};
    text-align: center;
    padding: ${props => props.padding ? '15px 0' : ''}
`;

export default Container