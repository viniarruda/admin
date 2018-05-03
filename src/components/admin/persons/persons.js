import React, { Component } from 'react'
import styled from 'styled-components'
import FormEmployee from './formEmployee'
import FormCustomer from './formCustomer'
import Title from '../../layout/styled-components/title'
import Breadcrumbs from '../../../components/layout/styled-components/commons/breadcrumb'
import Cards from '../../../components/layout/styled-components/commons/cards'
import Container from '../../../components/layout/styled-components/commons/container'

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
                <Breadcrumbs title="Cadastro de Pessoa"></Breadcrumbs>
                <Cards>
                    <div>
                        <Tab onClick={this.showEmployee.bind(this)}>Employee</Tab>
                        <Tab onClick={this.showCustomer.bind(this)}>Customer</Tab>
                    </div>
                    {
                        this.state.show === 0 ? <FormEmployee /> : <FormCustomer />
                    }
                </Cards>
            </Container>
        )
    }
}

export default Persons