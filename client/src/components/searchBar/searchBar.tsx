import * as React from 'react';

import './searchBar.css';

export class SearchBar extends React.Component<{ submit: any }, { search: string }> {
  constructor(props: any){
    super(props);
    this.state = {search: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Could not find real event type
  public handleChange(event: any) {
    this.setState({search: event.target.value});
  }

  public handleSubmit(event: any) {
    this.props.submit(this.state.search);
    event.preventDefault();
  }

  public render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <input className="form-control mr-sm-2" type="text" placeholder="PokeName" aria-label="Search"  value={this.state.search} onChange={this.handleChange} />
          <button className="btn btn-outline-danger my-2 my-sm-0" type="submit" value="Submit">Search for a Pokemon</button>
        </form>
      </nav>
    );
  }
}
