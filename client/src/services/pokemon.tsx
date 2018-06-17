// TODO : Set Headers etc

import * as HttpService from './http';
const pokeApiUrl = "https://pokeapi.co/api";

export const getPokemon = (str: string): Promise<any> => {
  return HttpService.get(pokeApiUrl + "/v2/pokemon/" + str);
}

export const getPokemonV1 = (str: string): Promise<any> => {
  return HttpService.get(pokeApiUrl + "/v1/pokemon/" + str);
}