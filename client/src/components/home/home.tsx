import * as React from 'react';

import { SearchBar } from '../searchBar/searchBar';

import './home.css';

export class Home extends React.Component {
  constructor(props: any){
    super(props);
  }

  public performSearch(str: string): Promise<string | void> {
    return fetch("https://pokeapi.co/api/v2/pokemon/" + str + '/', {
      method: "GET",
    }).then((res) => {
      return res.json();
    }, (error) => {
      alert(error.message)
    });
  }

  public render() {
    return (
      <SearchBar submit={this.performSearch} />
    );
  }
}
