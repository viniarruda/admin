import React, { Component } from 'react'
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
    padding: 10px;
    border-radius: 5px;
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
`;

class Persons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: 0
        }
    }

    showEmployee() {
        this.setState({
            show: 0
        })
    }

    showCustomer() {
        this.setState({
            show: 1
        })
    }

    render() {
        return (
            <Container>
                <Title>Cadastro de pessoas</Title>
                <div>
                    <Tab onClick={this.showEmployee.bind(this)}>Employee</Tab>
                    <Tab onClick={this.showCustomer.bind(this)}>Customer</Tab>
                </div>
                {
                    this.state.show === 0 ? <FormEmployee /> : <FormCustomer />
                }
            </Container>
        )
    }
}

export default Persons