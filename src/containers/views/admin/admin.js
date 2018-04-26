import React from 'react'
import {
    Route,
    Switch
} from 'react-router-dom'
import Container from '../../../components/layout/styled-components/admin/container'
import Sidebar from '../../../components/layout/styled-components/admin/sidebar'
import ListSidebar from '../../../components/layout/styled-components/admin/listSidebar'
import Users from '../../../components/admin/users/users'
import Persons from '../../../components/admin/persons/persons'
import Positions from '../../../components/admin/positions/positions'


const Admin = () => (
    <Container>
        <Sidebar>
            <ListSidebar/>
        </Sidebar>
        <Content />
    </Container>
);

const Dashboard = () => {
    return (
        <div>
            <h1>MIOLO</h1>
        </div>
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