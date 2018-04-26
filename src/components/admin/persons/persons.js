import React from 'react'
import styled from 'styled-components'
import FormEmployee from './formEmployee'
import FormCustomer from './formCustomer'
import Title from '../../layout/styled-components/title'

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: center;
`;

const Tab = styled.div`
    border: 1px solid #10ACC2;
    padding: 5px;
    margin: 0 10px;
`;

state = { show: 0 }
const Persons = () => (
    <Container>
        <Title>Cadastro de pessoas</Title>
        <div>
            <span onClick={this.setState({show: 0})}>Employee</span>
            <span onClick={this.setState({show: 1})}>Customer</span>
        </div>
        {console.log('state', show)}
        <FormEmployee />
        <FormCustomer />
    </Container>
);

export default Persons