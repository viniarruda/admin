import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers'
import faPosition from '@fortawesome/fontawesome-free-solid/faGraduationCap'
import colors from "../commons/colors";

const Ul = styled.ul`
  background-color: #e6e6e;
  width: 200px;
  height: 100vh;
`;

const Li = styled.li`
    padding: 10px;
    background-color: ${props => props.active ? '#10ACC2' : ''};
    border-bottom: 1px solid #d6d6d6;
`;

const Text = styled.span`
    margin-left: 10px
`;

const Redirect = styled(Link) `
    padding: 10px 5px;
    color: #000;
    display: block;
    text-decoration: none;
    &:hover {
        text-decoration: none;
        color: #fff;
    }
`;

const List = () => (
    <Ul>
        <Li><Redirect to="/admin" ><FontAwesomeIcon icon={faHome} /><Text>Dashboard</Text></Redirect></Li>
        <Li ><Redirect to="/admin/usuarios"><FontAwesomeIcon icon={faUser} /><Text>Cadastrar usuário</Text></Redirect></Li>
        <Li ><Redirect to="/admin/pessoas"><FontAwesomeIcon icon={faUsers} /><Text>Cadastrar pessoas</Text></Redirect></Li>
        <Li><Redirect to="/admin/cargos"><FontAwesomeIcon icon={faPosition} /><Text>Cadastrar cargos</Text></Redirect></Li>
    </Ul>
);

export default List
