import {
  ADD_POKETYPES,
  SET_POKETYPE_DETAILS,
  RECEIVE_POKETYPES,
  REQUEST_POKETYPES
} from '../actions/actionTypes';

const initialState = {
    isFetching: false,
    didInvalidate: false,
    poketypes: [],
    fetchedPageCount: 0,
    nextPageUrl: "",
    lastUpdated: 0
};

const poketype = (state:any = initialState, action: any) => {
  switch (action.type) {
    case REQUEST_POKETYPES:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_POKETYPES:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
      }
    case ADD_POKETYPES:
      return  {
        ...state,
        poketypes: [ ...state.poketypes, ...action.poketypes ]
      }
    case SET_POKETYPE_DETAILS:
      return {
        ...state,
        poketypes: state.poketypes.map((poketype:any) =>
        (poketype.name === action.poketype.name)
          ? {...poketype, statAvg: action.poketype.statAvg }
          : poketype
        )}
    default:
      return state
  }
}

export default poketype;