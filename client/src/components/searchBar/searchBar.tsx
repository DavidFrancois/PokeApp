import * as React from 'react';


import './searchBar.css';

export class SearchBar extends React.Component<{ performSearch: any }, { search: string }> {
  constructor(props: any){
    super(props);
    this.state = {search: '' };
  }

  // Could not find real event type
  public handleChange = (event: any): void => {
    this.setState({search: event.target.value});
  }

  public onClick = (event: any) => {
    this.props.performSearch(this.state.search);
    event.preventDefault();
  }


  public render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="text" placeholder="PokeName" aria-label="Search"  value={this.state.search} onChange={this.handleChange} />
          <button className="btn btn-outline-danger my-2 my-sm-0" type="submit" value="Submit"
            onClick={this.onClick}>Search for a Pokemon</button>
        </form>
      </nav>
    );
  }
}
