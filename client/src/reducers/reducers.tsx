
import pokemon from './pokemon';
import poketype from './poketype';
import global from './global';
import { combineReducers } from 'redux';

const pokeApp = combineReducers({
  pokemon: pokemon,
  poketype: poketype,
  global: global
})

export default pokeApp;