import * as HttpService from './http';
const pokeApiUrl = "https://pokeapi.co/api";

export const getType = (str: string): Promise<any> => {
  return HttpService.get(pokeApiUrl + "/v2/type/" + str);
}
