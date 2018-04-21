import React from 'react'
import styled from 'styled-components'
import colors from "./commons/colors";

const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 25px 0;
    color: ${props => colors[Object.keys(props).find(p => colors[p])] || colors.black};
`;

export default Title;