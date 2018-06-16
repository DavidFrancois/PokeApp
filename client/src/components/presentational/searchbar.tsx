import * as React from 'react';
import './css/searchBar.css';

interface ISearchBarProps  {
  setSearched: any;
}

interface ISearchBarState {
  search: string;
}

export default class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {

  public getSearch = () => this.state.search;

  public handleChange = (event: any) => this.setState({ search: event.target.value });

  public handleClick = (event: any) => {
    this.props.setSearched(this.getSearch())
    event.preventDefault();
  }

  public render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="text" placeholder="PokeName" aria-label="Search" onChange={this.handleChange}/>
          <button className="btn btn-outline-danger my-2 my-sm-0" type="submit" value="Submit"
            onClick={this.handleClick}>Search for a Pokemon</button>
        </form>
      </nav>
    )
  }
}
