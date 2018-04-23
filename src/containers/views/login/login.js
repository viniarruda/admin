import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from "../../../actions/auth"
import Container from '../../../components/layout/styled-components/container'
import Content from '../../../components/layout/styled-components/login/content'
import LoginForm from '../../../components/login/form'
import Title from '../../../components/layout/styled-components/title'
import Head from '../../../components/layout/styled-components/login/head'
import Image from '../../../components/layout/styled-components/login/image'
import iconPerson from '../../../assets/images/user-shape.png'

const Login = (props) => {
    const {from} = props.location.state || {from: {pathname: "/admin"}};

    if (props.auth.logged) {
        return <Redirect to={from}/>;
    }

    return (
        <div>
            <Container>
                <Content gray>
                    {/*{<Title>Você precisa estar logado para acessar: {from.pathname}</Title>}*/}
                    <Head>
                        <Image src={iconPerson} />
                        <Title blue>Login</Title>
                    </Head>
                    <LoginForm onSubmit={props.login} />
                </Content>
            </Container>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(login({}))
});

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)