import url from '../services/api'

export function listCustomers(token) {
    return (dispatch, getState) => {
        dispatch({
            type: 'ALL_CUSTOMERS',
            payload: new Promise((resolve) => {
                fetch(url + "persons/customers/", {
                    method: "GET",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Cache-Control": "no-cache",
                        "Content-type": "application/json",
                        "Authentication": token
                    },
                })
                .then(response =>{
                    if(!response.ok) {
                        console.log('Error fetch')
                    }
                    return response
                })
                .then(res => res.json())
                .then(res => {
                    resolve(res)
                })
                .catch(err => err.response.data)
            })
        })
    }
}

export function listEmployees(token) {
    return (dispatch, getState) => {
        dispatch({
            type: 'ALL_EMPLOYEES',
            payload: new Promise((resolve) => {
                fetch(url + "persons/employees/", {
                    method: "GET",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Cache-Control": "no-cache",
                        "Content-type": "application/json",
                        "Authentication": token
                    },
                })
                .then(response =>{
                    if(!response.ok) {
                        console.log('Error fetch')
                    }
                    return response
                })
                .then(res => res.json())
                .then(res => {
                    resolve(res)
                })
                .catch(err => err.response.data)
            })
        })
    }
}

