import { CHANGE, SUBMIT } from './actions';

// Name has to be letters or numbers and be between 6 - 15 characters
const nameRegex = /^[a-z0-9_-]{6,15}$/;

export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        name: action.value,
        isValid: action.value.match(nameRegex) ? true : false,
      };
    case SUBMIT:
      return {
        ...state,
      };
    default:
      return state;
  }
};
