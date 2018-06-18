import * as HttpService from './http';
import { PokeType } from '../models/type';

import {
  addPoketypes,
  receivePoketypes,
  requestPoketypes
} from '../actions/actionTypes';


const pokeApiUrl = "https://pokeapi.co/api";

export const getType = (str: string): Promise<any> => {
  return HttpService.get(pokeApiUrl + "/v2/type/" + str);
}

export const fetchTypes = async (store: any, queryParams: string = "?limit=20", isFetching: boolean = false): Promise<void> => {
  if (!isFetching) store.dispatch(requestPoketypes());

  const data = await getType(queryParams);

  store.dispatch(addPoketypes(data.results.map((r:any) => (new PokeType(r.name)))));
  if (data.next != null) {
    const next = data.next.split('/');
    fetchTypes(store, next[next.length - 1], true);
  } else {
    store.dispatch(receivePoketypes());
  }
}