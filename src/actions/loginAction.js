import url from '../services/api'
import { SubmissionError } from 'redux-form'
import actions from 'redux-form/es/actions'

export function login(credentials) {
    return ( fetch(url + "user_auth",{
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: {
            "login_name": credentials.username,
            "password": credentials.password
        }
    })
    )
}

export const requestLogin = (credentials) => async dispatch => {
    const response = await login(credentials)
    console.log(response)
    if (response.error) {
        dispatch(errorAuthLogin(response.error.message))
        throw new SubmissionError({_error: response.error.message})
    }

    const {token, user} = response.data
    actions.reset('loginForm')

    dispatch(login())
    dispatch(fetchAuthLogin(token))
}

export const fetchAuthLogin = (payload) => {
    return {
      type: 'AUTH_LOGIN_FULFILLED',
      payload
    }
}

export const errorAuthLogin = (payload) => {
    return {
      type: 'AUTH_LOGIN_REJECTED',
      payload
    }
  }

// export const requestLogin = (credentials) => async (dispatch, getState) => {
//     const response = await login(credentials)

//     getState().login.token
    
// }