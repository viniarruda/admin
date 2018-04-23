import React from 'react'
import {
    Route,
    Switch
} from 'react-router-dom'
import Container from '../../../components/layout/styled-components/admin/container'
import Sidebar from '../../../components/layout/styled-components/admin/sidebar'
import ListSidebar from '../../../components/layout/styled-components/admin/listSidebar'
import Users from '../../../components/admin/users/users'


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
      {/*<Route path="/pessoas" component={Persons} />*/}
      {/*<Route path="/cargos" component={Positions} />*/}
      <Route path="/admin" component={Dashboard} />
  </Switch>
);

export default Admin