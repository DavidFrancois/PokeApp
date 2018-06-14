import * as React from 'react';
import './App.css';
import * as PokeService from './services/pokemon';
import * as TypeService from './services/type';

import { Home } from './components/home/home';
import pokeStore from './stores/pokestore';
import typeStore from './stores/typestore';

class App extends React.Component {

  public componentDidMount() {
    this.fetchPokemons();
    this.fetchTypes();
  }

  public fetchTypes = async (queryParams: string = "?limit=20") => {
    TypeService.getType(queryParams).then(data => {
      typeStore.addPokeTypes(data.results.map((r: any) => r.name));
      if (data.next != null) {
        const next = data.next.split('/');
        this.fetchTypes(next[next.length - 1]);
      }
    });
  }

  public fetchPokemons = async (queryParams: string = "?limit=200") => {
    PokeService.getPokemon(queryParams)
      .then(data => {
        pokeStore.addPokeNames(data.results.map((r: any) => r.name));
        if (data.next != null) {
          const next = data.next.split('/');
          this.fetchPokemons(next[next.length - 1]);
        } else {
          pokeStore.addPokemonsV1();
        }
      });
  }

  // public onSelectPokemon = (pokeResult) => {
  //   this.props.actions.setPokeResult(pokeResult);
  //   this.props.actions.setAppState("details");
  //   this.props.onChangePokemon(pokeResult.id);
  // }

  public render() {
    return (
      <Home />
    )
  }
}

export default App;
