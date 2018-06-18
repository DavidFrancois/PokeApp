// TODO : Set Headers etc

import * as HttpService from './http';
import { StatsKeys } from '../models/type';
import { requestPokemons,
        addPokemons,
        setPokemonDetails,
        receivePokemons,
        setPoketypeDetails } from '../actions/actionTypes';
const pokeApiUrl = "https://pokeapi.co/api";

export const getPokemon = (str: string): Promise<any> => {
  return HttpService.get(pokeApiUrl + "/v2/pokemon/" + str);
}

export const getPokemonV1 = (str: string): Promise<any> => {
  return HttpService.get(pokeApiUrl + "/v1/pokemon/" + str);
}


export const fetchPokemons = async (store: any, queryParams: string = "?limit=200", isFetching: boolean = false) => {
  if (!isFetching) store.dispatch(requestPokemons());

  const data = await getPokemon(queryParams);

  store.dispatch(addPokemons(data.results.map((r:any) => ({ name: r.name }))));
  if (data.next != null) {
    const next = data.next.split('/');
    fetchPokemons(store, next[next.length - 1], true);
  } else {
    addPokemonsDetails(store);
  }
}

export const addPokemonsDetails = async (store: any, queryParam: string = "?limit=100") => {
  const result = await getPokemonV1(queryParam);

  result.objects.map((r: any) => {
    return {
      id: Number.parseInt(r.national_id),
      name: r.name.toLowerCase(),
      stats: {
        attack: Number.parseInt(r.attack),
        defense: Number.parseInt(r.defense),
        height:  Number.parseInt(r.height),
        hp: Number.parseInt(r.hp),
        sp_atk: Number.parseInt(r.sp_atk),
        sp_def: Number.parseInt(r.sp_def),
        speed: Number.parseInt(r.speed),
        weight:  Number.parseInt(r.weight)
      },
      types: r.types.map((t: any) => t.name)
    }
  }).forEach((poke: any) => {
    store.dispatch(setPokemonDetails(poke));
  });

  if (result.meta.next) {
    const next = result.meta.next.split('/');
    addPokemonsDetails(store, next[next.length -1]);
  } else {
    store.dispatch(receivePokemons());
    computeAvg(store);
  }
}

const computeAvg = (store: any) => {
  const pokemons = store.getState().pokemon.pokemons;
  const types = store.getState().poketype.poketypes;
  for (const type of types) {
    let pokeCount = 0;
    for (const poke of pokemons) {
      if (!poke.types) continue;
      for (const t of poke.types) {
        if (t === type.name) {
          ++pokeCount;
          for (const s of StatsKeys)
            type.statAvg[s] += poke.stats[s];
        }
      }
    }

    for (const s of StatsKeys)
      if (type.statAvg[s] > 0) type.statAvg[s] = Math.round(type.statAvg[s] / pokeCount);

    store.dispatch(setPoketypeDetails(type));
  }
}