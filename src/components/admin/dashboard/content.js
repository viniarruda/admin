import React from 'react'
import {
    Route,
    Switch
} from 'react-router-dom'
import Dashboard from './dashboard'
import Users from '../users/users'
import Persons from '../persons/persons'
import Positions from '../positions/positions'

const Content = () => (
    <Switch>
        <Route path="/admin/usuarios" component={Users} />
        <Route path="/admin/pessoas" component={Persons} />
        <Route path="/admin/cargos" component={Positions} />
        <Route path="/admin" component={Dashboard} />
    </Switch>
);

export default Content