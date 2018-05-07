const INITIAL_STATE = {
    user: {},
    token: null,
    error: null
  };

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'AUTH_LOGIN_FULFILLED':
            return {
                ...state,
                ...action.payload,
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