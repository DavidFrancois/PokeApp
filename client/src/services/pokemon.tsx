// TODO : Set Headers etc

import * as HttpService from './http';

const pokeApiUrl = "https://pokeapi.co/api/v2/";

export const getPokemon = (str: string): Promise<any> => {
  return HttpService.get(pokeApiUrl + "pokemon/" + str);
}