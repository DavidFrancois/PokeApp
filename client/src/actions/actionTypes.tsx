import { Action} from 'redux';
import { PokeType } from '../models/type';


// Actions types
export const ADD_POKEMONS = 'ADD_POKEMONS';
export const REQUEST_POKEMONS = 'REQUEST_POKEMONS';
export const RECEIVE_POKEMONS = 'RECEIVE_POKEMONS';
export const ADD_POKETYPES = 'ADD_TYPES';
export const REQUEST_POKETYPES = 'REQUEST_TYPES';
export const RECEIVE_POKETYPES = 'RECEIVE_TYPES';
export const SET_POKEMON_DETAILS = 'SET_POKEMON_DETAILS';
export const SET_POKETYPE_DETAILS = 'SET_POKETYPE_DETAILS';
export const SET_SEARCHED = 'SET_SEARCHED';
export const SET_FOUND = 'SET_FOUND'


// Actions creators



export const addPokemons = (pokemons: any[]) => {
  return { type: ADD_POKEMONS, pokemons }
}

export const receivePokemons = (): Action<string> => {
  return { type: RECEIVE_POKEMONS }
}

export const addPoketypes = (poketypes: PokeType[]) => {
  return { type: ADD_POKETYPES, poketypes }
}

export const requestPoketypes = () => {
  return { type: REQUEST_POKETYPES }
}

export const receivePoketypes = () => {
  return { type: RECEIVE_POKETYPES }
}

export const setPokemonDetails = (pokemon: any) => {

  return { type: SET_POKEMON_DETAILS, pokemon }
}

export const setPoketypeDetails = (poketype: PokeType) => {
  return { type: SET_POKETYPE_DETAILS, poketype }
}

export const requestPokemons = () => {
  return { type: REQUEST_POKEMONS }
}

export const setSearched = (searched: string) => {
  return { type: SET_SEARCHED, searched}
}

export const setFound = (name: string) => {
  return { type: SET_FOUND, name}
}
