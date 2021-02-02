import { GET_ERRORS } from "../actions/types";

const initialState = {
  authError: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      console.log('login error')
      return {
        ...state,
        authError: 'Login Error'
      }
    default:
      return {...state};
  }
}