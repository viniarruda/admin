import url from '../services/api'
import { SubmissionError } from 'redux-form'
import actions from 'redux-form/es/actions'
import { login } from './auth'

export function validateLogin(credentials) {
    return ( new Promise((resolve) => {
        fetch(url + "user_auth", {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Cache-Control": "no-cache",
                "Content-type": "application/json",
            },
            body:JSON.stringify({
                login_name: credentials.username,
                password: credentials.password , 
            })
        })
        .then(response =>{
            if(!response.ok) {
                // throw Error("Failed")
                console.log('Error')
            }
            return response
        })
        .then(res => res.json())
        .then(res => {
            resolve(res)
        })
        .catch(err => err.response.data)
    })
    ) //End return 
}


export const requestLogin = (credentials) => async dispatch => {
    const response = await validateLogin(credentials)
    console.log('response', response)
    if (response.error) {
        dispatch(errorAuthLogin(response.error.message))
        throw new SubmissionError({_error: response.error.message})
    }

    const {token, user} = response
    actions.reset('loginForm')

    dispatch(login())
    dispatch(fetchAuthLogin({token, user}))
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