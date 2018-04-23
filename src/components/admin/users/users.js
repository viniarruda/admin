import React from 'react'
import styled from 'styled-components'
import Form from './form'
import Title from '../../layout/styled-components/title'

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: center;
`;

const Users = () => (
    <Container>
        <Title>Cadastro de usuários</Title>
        <Form />
    </Container>
);

export default Users