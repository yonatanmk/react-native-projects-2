import { INCREMENT_COUNT, DECREMENT_COUNT } from '../actions/count';

const countReducer = (state = 45, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return state + 1;
    case DECREMENT_COUNT:
      return state - 1;
    default:
      return state;
  }
}

export default countReducer;
