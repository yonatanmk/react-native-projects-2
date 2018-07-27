import { FORM_INPUT } from '../actions/form-input';

const countReducer = (state = 'Change This Text!', action) => {
  switch (action.type) {
    case FORM_INPUT:
      return action.payload;
    default:
      return state;
  }
}

export default countReducer;
