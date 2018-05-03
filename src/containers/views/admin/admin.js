import React from 'react'
import {
    Route,
    Switch
} from 'react-router-dom'
import Container from '../../../components/layout/styled-components/admin/container'
import ContainerDash from '../../../components/layout/styled-components/commons/container'
import Title from '../../../components/layout/styled-components/title'
import Grid from '../../../components/layout/styled-components/grid/grid'
import List from '../../../components/layout/styled-components/grid/list'
import Sidebar from '../../../components/layout/styled-components/admin/sidebar'
import ListSidebar from '../../../components/layout/styled-components/admin/listSidebar'
import Users from '../../../components/admin/users/users'
import Persons from '../../../components/admin/persons/persons'
import Positions from '../../../components/admin/positions/positions'


const Admin = () => (
    <Container>
        <Sidebar>
            <ListSidebar />
        </Sidebar>
        <Content />
    </Container>
);

const Dashboard = () => {
    return (
        <ContainerDash row padding>
            <Grid>
                <Title>Users</Title>
                <List>Lorem Ipsum</List>
                <List>Lorem Ipsum</List>
                <List>Lorem Ipsum</List>
                <List>Lorem Ipsum</List>
                <List>Lorem Ipsum</List>
                <List>Lorem Ipsum</List>
            </Grid>
            <Grid>
                <Title>Persons</Title>
                <List>Lorem Ipsum</List>
                <List>Lorem Ipsum</List>
                <List>Lorem Ipsum</List>
                <List>Lorem Ipsum</List>
            </Grid>
        </ContainerDash>
    )
}

const Content = () => (
        <Switch>
            <Route path="/admin/usuarios" component={Users} />
            <Route path="/admin/pessoas" component={Persons} />
            <Route path="/admin/cargos" component={Positions} />
            <Route path="/admin" component={Dashboard} />
        </Switch>
);

export default Admin