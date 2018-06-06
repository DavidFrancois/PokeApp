import * as React from 'react';

import * as PokeService from '../../services/pokemon';
import { Detail } from '../details/detail';
import { SearchBar } from '../searchBar/searchBar';

import './home.css';

export class Home extends React.Component<{}, {currPokemon: any }> {

  constructor(props: any){
    super(props);
    this.state = { currPokemon: null };
    this.performSearch = this.performSearch.bind(this);
  }

  public performSearch(str: string) {
    PokeService.getPokemon(str)
      .then((data) => {
        this.setState({currPokemon: data});
      });
  }

  public render() {
    return (
      // Render can only return 1 child
      <div>
        <SearchBar submit={this.performSearch} />
        <main>
          <Detail pokemon={this.state.currPokemon} />
        </main>
      </div>
    );
  }
}
