const INITIAL_STATE = {
    list: {
      customer: [],
      employee: [],
      isPending: false,
      error: null
    },
  }

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ALL_CUSTOMERS_PENDING":
        case "ALL_EMPLOYEES_PENDING":
            return {
                ...state,
                list: {
                    ...state.list,
                    isPending: true,
                    error: null
                }
            }
        break
        case "ALL_CUSTOMERS_FULFILLED":
            return {
                ...state,
                list: {
                    ...state.list,
                    customer: action.payload,
                    isPending: false,
                    error: null
                }
            }
        break
        case "ALL_EMPLOYEES_FULFILLED":
            return {
                ...state,
                list: {
                    ...state.list,
                    employee: action.payload,
                    isPending: false,
                    error: null
                }
            }
        break
        default:
            return state
    }
    return state 
}

export default userReducer