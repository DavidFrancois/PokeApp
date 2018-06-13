import * as React from 'react';
import './App.css';
import * as PokeService from './services/pokemon';

import { Home } from './components/home/home';
import pokeStore from './stores/pokestore';

class App extends React.Component {

  public componentDidMount() {
    this.fetchPokemons();
  }

  public fetchPokemons = async (queryParams: string = "?limit=200") => {
    PokeService.getPokemon(queryParams)
      .then(data => {
        pokeStore.addPokemons(data.results.map((r: any) => r.name));
        if (data.next != null) {
          const next = data.next.split('/');
          this.fetchPokemons(next[next.length - 1]);
        } else {
          // console.log("Test");
        }
      });
  }

  public render() {
    return (
      <Home />
    )
  }
}

export default App;
