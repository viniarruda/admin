import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from "../../../actions/auth"
import { requestLogin } from '../../../actions/loginAction'
import Container from '../../../components/layout/styled-components/container'
import Content from '../../../components/layout/styled-components/login/content'
import LoginForm from '../../../components/login/form'
import Title from '../../../components/layout/styled-components/title'
import Head from '../../../components/layout/styled-components/login/head'
import Image from '../../../components/layout/styled-components/login/image'
import iconPerson from '../../../assets/images/user-shape.png'


const handleSubmit = ({username, password}) => {
    console.log(username, password)
}

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
                    <LoginForm onSubmit={handleSubmit} />
                </Content>
            </Container>
        </div>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {requestLogin})(Login)