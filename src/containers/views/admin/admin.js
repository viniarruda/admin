import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listCustomers, listEmployees } from '../../../actions/personAction'
import Content from '../../../components/admin/dashboard/content'
import Container from '../../../components/layout/styled-components/admin/container'
import Sidebar from '../../../components/layout/styled-components/admin/sidebar'
import ListSidebar from '../../../components/layout/styled-components/admin/listSidebar'
import Loading from '../../../components/layout/styled-components/loading'

class Admin extends Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount() {
        const { listCustomers, listEmployees, auth } = this.props
        listCustomers(auth.token)
        listEmployees(auth.token)
    }
    
    render() {
        const { isPending } = this.props.persons.list
        return (
            <Container>
                <Sidebar>
                    <ListSidebar />
                </Sidebar>
                <Content />
                <Loading show={isPending}/>
            </Container>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        auth: state.login,
        persons: state.person
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        listCustomers: (token) => {
            dispatch(listCustomers(token))
        },
        listEmployees: (token) => {
            dispatch(listEmployees(token))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)