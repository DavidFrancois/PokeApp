// TODO : Set Headers etc

import * as HttpService from './http';

export const getPokemon = (str: string): Promise<any> => {
  return HttpService.get("pokemon/" + str);
}