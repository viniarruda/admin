import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import auth from './auth'

const Reducers = combineReducers({
  auth,
  form: formReducer,
})

export default Reducers