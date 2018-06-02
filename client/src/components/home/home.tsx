import * as React from 'react';

import { SearchBar } from '../searchBar/searchBar';

import './home.css';

export class Home extends React.Component {
  constructor(props: any){
    super(props);
  }

  public render() {
    return (
      <SearchBar />
    );
  }
}
