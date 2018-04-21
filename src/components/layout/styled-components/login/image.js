import React from 'react'
import styled from 'styled-components'
import colors from "../commons/colors";

const Image = styled.img`
    background: ${props => colors[Object.keys(props).find(p => colors[p])] || colors.default};
    border: 6px solid rgba(221, 218, 215, 0.23);
    width: 100px;
    border-radius: 50%;
    &:hover {
        opacity: .7;
    }
`;

export default Image