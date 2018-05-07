import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import auth from './auth'
import login from './loginReducer'
import person from './personReducer'

const Reducers = combineReducers({
  auth,
  login,
  person,
  form: formReducer,
})

export default Reducers