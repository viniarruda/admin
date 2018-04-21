import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components'

const Form = styled.form`
    width: 80%;
    margin: 0 auto;
    padding: 6% 0 9% 0;
`;

const Input = styled.input`
    text-align: left;
    position: relative;
    width: 100%;
    padding: 3%;
    background: #D3D3D3;
    margin-bottom: 6%;
    color: #676767;
    font-weight: 600;
    font-size: 16px;
    outline: none;
    border: none;
    border-radius: 5px;
    border: 1px solid #DED6D6;
    -webkit-appearance: none;
`;

const Submit = styled.button`
    width: 100%;
    padding: 3%;
    margin-bottom: 8%;
    background: #10ACC2;
    color: #ECECEC;
    box-shadow: inset 0px 0px 5px #666464;
    -webkit-text-shadow: 0px 0px 3px #000;
    -moz-text-shadow: 0px 0px 3px #000;
    -o-text-shadow: 0px 0px 3px #000;
    -ms-text-shadow: 0px 0px 3px #000;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    font-weight: 500;
    border-radius: 5px;
    transition: 0.5s;
    -webkit-appearance: none;
    -webkit-transition: 0.5s;
    &[disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

const Error = styled.span`
    color: #db2626;
    display: block;
    padding: 0 0 5px;
`;

const validate = values => {
    const errors = {}
    if(!values.username) {
        errors.username = 'Obrigatório'
    }
    if(!values.password) {
        errors.password = 'Obrigatório'
    }
    return errors
}

const renderField = ({
    input,
    label,
    type,
    placeholder,
    meta: { touched, error }
}) => (
    <div>
        <Input {...input} placeholder={placeholder} type={type} />
        {touched &&
            (error && <Error>{error}</Error>)
        }
    </div>
)

const LoginForm = props => {
    const { handleSubmit, pristine, submitting } = props
    return (
        <Form onSubmit={handleSubmit}>
            <Field
                name="username"
                component={renderField}
                type="text"
                placeholder="Digite seu usuário"
            />
            <Field
                name="password"
                component={renderField}
                type="password"
                placeholder="Digite sua senha"
            />
            <Submit
                type="submit"
                disabled={pristine || submitting}
            >Login</Submit>
        </Form>
    )
}

export default reduxForm({
    form: 'login',
    validate
})(LoginForm)