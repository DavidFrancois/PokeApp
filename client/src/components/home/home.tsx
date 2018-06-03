import * as React from 'react';

import * as PokeService from '../../services/pokemon';
import { SearchBar } from '../searchBar/searchBar';

import './home.css';

export class Home extends React.Component {
  constructor(props: any){
    super(props);
  }

  public performSearch(str: string) {
    alert(str);
    PokeService.getPokemon(str)
      .then((data) => {
        alert(data);
      });
  }

  public render() {
    return (
      <SearchBar submit={this.performSearch} />
    );
  }
}
