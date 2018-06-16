import {
  ADD_POKEMONS,
  SET_POKEMON_DETAILS,
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS,
} from '../actions/actionTypes';


const initialState = {
    isFetching: false,
    didInvalidate: false,
    pokemons: [],
    fetchedPageCount: 0,
    nextPageUrl: "",
    lastUpdated: 0
};

const pokemon = (state: any = initialState, action: any) => {
  switch (action.type) {
    case REQUEST_POKEMONS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_POKEMONS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false
      }
    case ADD_POKEMONS:
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.pokemons],
      }
    case SET_POKEMON_DETAILS:
      return {
        ...state,
        pokemons: state.pokemons.map((pokemon: any) =>
        (pokemon.name === action.pokemon.name)
          ? {...pokemon, stats: action.pokemon.stats, types: action.pokemon.types, id: action.pokemon.id }
          : pokemon
      )
    }
    default:
      return state
  }
}

export default pokemon;
