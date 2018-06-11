import { combineReducers } from 'redux';

import countReducer from './count'
import formInputReducer from './form-input'

export default combineReducers({
  count: countReducer,
  formInput: formInputReducer,
})
