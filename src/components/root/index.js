import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import baseStyles from './base-styles'
import PrivateRoute from '../private-route'
import Header from '../layout/header'
import Content from '../layout/styled-components/content'
import Login from '../../containers/views/login/login'
import Home from '../../containers/views/home/home'
import Post from '../../containers/views/post/post'

const Root = ({store}) => {
    baseStyles();
    return (<Provider store={store}>
        <Router>
            <div>
                <Header/>
                <Content>
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <PrivateRoute path="/post" component={Post}/>
                        <PrivateRoute path="/" component={Home}/>
                    </Switch>
                </Content>
            </div>
        </Router>
    </Provider>)
};

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root