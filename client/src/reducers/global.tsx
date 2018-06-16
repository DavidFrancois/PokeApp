import {
  SET_SEARCHED,
  SET_FOUND
} from '../actions/actionTypes';


const initialState = {
   searched: '',
   searching: false,
   found: ''
};

const global = (state: any = initialState, action: any) => {
  switch (action.type) {
   case SET_SEARCHED:
      return {
        ...state,
        searched: action.searched,
        searching: true
      }
    case SET_FOUND:
      return {
        ...state,
        searching: false,
        found: action.name
      }
    default:
      return state
  }
}

export default global;
