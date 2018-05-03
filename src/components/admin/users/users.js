import React from 'react'
import styled from 'styled-components'
import Form from './form'
import Title from '../../layout/styled-components/title'
import Breadcrumbs from '../../../components/layout/styled-components/commons/breadcrumb'
import Cards from '../../../components/layout/styled-components/commons/cards'
import Container from '../../../components/layout/styled-components/commons/container'



const Users = () => (
    <Container>
        <Breadcrumbs title="Cadastro Cargos"></Breadcrumbs>
        <Cards>
            <Form />
        </Cards>
    </Container>
);

export default Users