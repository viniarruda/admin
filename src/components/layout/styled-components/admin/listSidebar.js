import React, { Component } from 'react'
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
    height: calc( 100vh - 50px);
`;

const Li = styled.li`
    padding: 6px 10px;
    border-bottom: 1px solid #d6d6d6;
`;

const Text = styled.span`
    margin-left: 10px
`;

const Redirect = styled(Link) `
    padding: 10px 5px;
    font-size: 14px;
    color: #000;
    display: block;
    text-decoration: none;
    transition: 0.2s color;
    &:hover {
        color: #1aa9bc;
    }
`;

const SubMenu = styled.ul`
    border-top: 1px solid #d6d6d6;
    background-color: #e8e8e8;
    display: ${props => props.show ? 'block' : 'none'};
`;

const SubMenuList = styled.li`
    padding: 10px 0;
`;

class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: ''
        }
    }

    openSubMenu() {
        this.setState({
            show: 'show'
        })
    }
    
    render() {
        return (
            <Ul>
                <Li><Redirect to="/admin" ><FontAwesomeIcon icon={faHome} /><Text>Dashboard</Text></Redirect></Li>
                <Li onClick={this.openSubMenu.bind(this)}><Redirect to="#"><FontAwesomeIcon icon={faUser} /><Text>Cadastrar usuário</Text></Redirect>
                    <SubMenu {...this.state.show}>
                        <SubMenuList><Redirect to="/admin/usuarios"><FontAwesomeIcon icon={faUser} /><Text>Cadastrar Cliente</Text></Redirect></SubMenuList>
                        <SubMenuList><Redirect to="/admin/usuarios"><FontAwesomeIcon icon={faUser} /><Text>Cadastrar Funcionário</Text></Redirect></SubMenuList>
                    </SubMenu>
                </Li>
                <Li><Redirect to="/admin/pessoas"><FontAwesomeIcon icon={faUsers} /><Text>Cadastrar pessoas</Text></Redirect></Li>
                <Li><Redirect to="/admin/cargos"><FontAwesomeIcon icon={faPosition} /><Text>Cadastrar cargos</Text></Redirect></Li>
            </Ul>
        )
    }
};

export default List;
