import url from '../services/api'
import { SubmissionError } from 'redux-form'
import actions from 'redux-form/es/actions'

export function login(username, password) {
    return (dispatch, getState) => {
        dispatch({
            type: 'LOGIN',
            payload: new Promise((resolve) => {
                fetch(url + "user_auth",{
                    headers: {
                        "method": "POST",
                    },
                    body: {
                        "login_name": username,
                        "passsword": password
                    }
                })
                .then(response => {
                    if (!response.ok) {
                        resolve(null)
                    } else {
                        return response
                    }
                })
                .then(res => res.json())
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => err.response.data)
            })
        })
    }
}

export const requestLogin = (credentials) => async dispatch => {
    const response = await login(credentials)
    console.log(response)
    if (response.error) {
        dispatch(errorAuthLogin(response.error.message))
        throw new SubmissionError({_error: response.error.message})
    }

    const {token, login_name} = response.data
    actions.reset('loginForm')

    dispatch(login())
    dispatch(fetchAuthLogin(token))
}

export const fetchAuthLogin = payload => {
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