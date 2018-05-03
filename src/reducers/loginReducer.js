const INITIAL_STATE = {
    user: {},
    token: null,
    error: null
  };

const loginReducer = (state = {token: ''}, action) => {
    switch (action.type) {
        case 'AUTH_LOGIN_FULFILLED':
            return {
                ...state,
                ...INITIAL_STATE,
                token: action.payload,
            }

        case 'AUTH_LOGIN_REJECTED':
            return {
                ...state,
                ...INITIAL_STATE,
                error: action.payload,
            }
        default:
            return state
    }
}

export default loginReducer