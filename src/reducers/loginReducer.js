const loginReducer = (state = {token: ''}, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                token: true
            }

        case 'SIGN_OUT':
            return {
                ...state,
                logged: false
            }

        default:
            return state
    }
}

export default loginReducer