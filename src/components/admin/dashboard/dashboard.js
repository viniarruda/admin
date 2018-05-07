import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import ContainerDash from '../../layout/styled-components/commons/container'
import Title from '../../layout/styled-components/title'
import Grid from '../../layout/styled-components/grid/grid'
import List from '../../layout/styled-components/grid/list'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.filterListCustomer = this.filterListCustomer.bind(this)
        this.filterListEmployees = this.filterListEmployees.bind(this)
    }
    
    filterListCustomer() {
        const { list } = this.props.persons

        let filteredList = list.customer

        filteredList = _.isEmpty(filteredList)

        if( !filteredList ) {
            return list.customer.map((user, key) => 
                <List key={key}>{user.name}</List>
            )
        } else {
            return <List>Nenhum cliente encontrado</List>
        }

    }

    filterListEmployees() {
        const { list } = this.props.persons

        let filteredList = list.employee

        filteredList = _.isEmpty(filteredList)

        if( !filteredList ) {
            return list.employee.map((user, key) => 
                <List key={key}>{user.name}</List>
            )
        } else {
            return <List>Nenhum funcionário encontrado</List>
        }
    }

    render() {
        return (
            
            <ContainerDash row padding>
                <Grid>
                    <Title>Funcionários</Title>
                    {this.filterListEmployees()}
                </Grid>
                <Grid>
                    {console.log('users', this.props.persons)}
                    <Title>Clientes</Title>
                    {this.filterListCustomer()}
                </Grid>
            </ContainerDash>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.person
    }
}

export default connect(mapStateToProps)(Dashboard)