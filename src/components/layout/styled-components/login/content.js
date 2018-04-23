import React from 'react'
import styled from 'styled-components'
import colors from "../commons/colors";

const Content = styled.div`
    background: ${props => colors[Object.keys(props).find(p => colors[p])] || colors.default};
    padding: 9px 13px;
    width: 30%;
    position: relative;
    margin-top: 50px;
    border: none;
    text-align: center;
    box-shadow: 0px 10px 12px rgba(0,0,0,0.2);
    
    @media (max-width: 700px) {
        width: 100%;
    }
`;

export default Content