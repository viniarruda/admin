import React from 'react'
import Form from './form'
import Breadcrumbs from '../../../components/layout/styled-components/commons/breadcrumb'
import Cards from '../../../components/layout/styled-components/commons/cards'
import Container from '../../../components/layout/styled-components/commons/container'

const Positions = () => (
    <Container>
        <Breadcrumbs title="Cadastro Cargos"></Breadcrumbs>
        <Cards>
            <div>
                <h1>Positions</h1>
                <Form />
            </div>
        </Cards>
    </Container>
);

export default Positions