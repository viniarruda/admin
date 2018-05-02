export function login(user, password) {
    
    return (dispatch, getState) => {
        dispatch({
            type: 'LOGIN',
            payload: new Promise((resolve) => {
                fetch(urls.mainUrl + "user_auth",{
                    headers: {
                        "method": "POST",
                    },
                    body: {
                        "login_name": user,
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
                .then(d => d.json())
                .then(d => {
                    resolve(d)
                })
                .catch((err)=>console.log(err))
            })
        })
    }
}