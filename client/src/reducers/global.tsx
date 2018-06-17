import {
  SET_SEARCHED,
  SET_FOUND,
  CHANGE_URL_FOUND
} from '../actions/actionTypes';

import {  pushUrlQuery } from 'react-url-query';


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
    case CHANGE_URL_FOUND:
      pushUrlQuery({ pokemon: action.payload.encodedQuery.pokemon });
      return {
        ...state,
        searching: false,
        found: action.payload.encodedQuery.pokemon
      }
    default:
      return state
  }
}

export default global;
