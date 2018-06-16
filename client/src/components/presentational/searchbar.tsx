import * as React from 'react';
import '../searchBar/searchBar.css';

type SearchBarProps = {
  setSearched: any
}

type SearchBarState = {
  search: string;
}

export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {

  getSearch = () => this.state.search;

  handleChange = (event: any) => this.setState({ search: event.target.value });

  handleClick = (event: any) => {
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
