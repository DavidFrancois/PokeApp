import * as React from 'react';

import './searchBar.css';

export class SearchBar extends React.Component {
  constructor(props: any){
    super(props);
  }

  public render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="PokeName" aria-label="Search" />
          <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search for a Pokemon</button>
        </form>
      </nav>
    );
  }
}
