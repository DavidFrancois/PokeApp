// TODO : Set Headers etc

import * as HttpService from './http';

export const getPokemon = (str: string): Promise<any> => {
  return HttpService.get("/v2/pokemon/" + str);
}

export const getPokemonV1 = (str: string): Promise<any> => {
  return HttpService.get("/v1/pokemon/" + str);
}