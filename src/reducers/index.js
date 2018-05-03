import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import auth from './auth'
import login from './loginReducer'

const Reducers = combineReducers({
  auth,
  login,
  form: formReducer,
})

export default Reducers