import * as React from 'react';
import { connect } from "react-redux";
import './App.css';
import * as PokeService from './services/pokemon';
import * as TypeService from './services/type';

import Home from './components/home/home';

import {
  addPoketypes,
  setPokemonDetails,
  setPoketypeDetails,
  addPokemons,
  requestPokemons,
  receivePokemons,
  receivePoketypes,
  requestPoketypes} from './actions/actionTypes';

import { PokeType, StatsKeys } from './models/type';

type AppProps = {
  isFetching: boolean,
  pokemons: any[],
  poketypes: any[],
  addPoketypes: any,
  setPokemonDetails: any,
  setPoketypeDetails: any,
  addPokemons: any,
  reqPokemons: any,
  recPokemons: any,
  recPoketypes: any,
  reqPoketypes: any
};


class App extends React.Component<AppProps> {

  public componentDidMount() {
    this.fetchPokemons();
    this.fetchTypes();
  }

  public fetchTypes = async (queryParams: string = "?limit=20") => {
    if (!this.props.isFetching) this.props.reqPoketypes;

    const data = await TypeService.getType(queryParams)

    this.props.addPoketypes(data.results.map((r:any) => (new PokeType(r.name))));
    if (data.next != null) {
      const next = data.next.split('/');
      this.fetchTypes(next[next.length - 1]);
    } else {
      this.props.recPoketypes();
    }
  }

  public fetchPokemons = async (queryParams: string = "?limit=200") => {
    if (!this.props.isFetching) this.props.reqPokemons();

    const data = await PokeService.getPokemon(queryParams);
    this.props.addPokemons(data.results.map((r:any) => ({ name: r.name })));
    if (data.next != null) {
      const next = data.next.split('/');
      this.fetchPokemons(next[next.length - 1]);
    } else {
      this.addPokemonsDetails();
    }
  }

  public addPokemonsDetails = async (queryParam: string = "?limit=100") => {
    const result = await PokeService.getPokemonV1(queryParam);

    result.objects.map((r: any) => {
      return {
        id: Number.parseInt(r.national_id),
        name: r.name.toLowerCase(),
        stats: {
          attack: Number.parseInt(r.attack),
          defense: Number.parseInt(r.defense),
          hp: Number.parseInt(r.hp),
          sp_atk: Number.parseInt(r.sp_atk),
          sp_def: Number.parseInt(r.sp_def),
          speed: Number.parseInt(r.speed),
          height:  Number.parseInt(r.height),
          weight:  Number.parseInt(r.weight)
        },
        types: r.types.map((t: any) => t.name)
      }
    }).forEach((poke: any) => {
      this.props.setPokemonDetails(poke);
    });

    if (result.meta.next) {
      const next = result.meta.next.split('/');
      this.addPokemonsDetails(next[next.length -1]);
    } else {
      this.props.recPokemons();
      this.computeAvg();
    }
  }

  public computeAvg = () => {
    const pokemons = this.props.pokemons;
    const types = this.props.poketypes;
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

      this.props.setPoketypeDetails(type);
    }
  }

  public render() {
    return (
      <Home />
    )
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  addPoketypes: (poketypes: PokeType[]) => dispatch(addPoketypes(poketypes)),
  setPokemonDetails: (pokemon: any) => dispatch(setPokemonDetails(pokemon)),
  setPoketypeDetails: (poketype: PokeType) => dispatch(setPoketypeDetails(poketype)),
  addPokemons: (pokemons: any[]) => dispatch(addPokemons(pokemons)),
  reqPokemons: () => dispatch(requestPokemons()),
  recPokemons: () => dispatch(receivePokemons()),
  recPoketypes: () => dispatch(receivePoketypes()),
  reqPoketypes: () => dispatch(requestPoketypes())
});


const mapStateToProps = (state: any) => ({
  isFetching: state.pokemon.isFetching,
  pokemons: state.pokemon.pokemons,
  poketypes: state.poketype.poketypes,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
