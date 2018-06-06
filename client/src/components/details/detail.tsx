import * as React from 'react';

import './detail.css';

export class Detail extends React.Component<{ pokemon: any }, {}> {
  constructor(props: any){
    super(props);
    this.pokeInfos = this.pokeInfos.bind(this);
  }

  public pokeInfos() {
    if (this.props.pokemon) {
      return (
        <div>
          <h1> Name: { this.props.pokemon.name } </h1>
          <span> ID: { this.props.pokemon.id } </span>
          <span> Height: { this.props.pokemon.height } </span>
          <span> Weight: { this.props.pokemon.weight } </span>
        </div>
      );
    }
    return <h1> No pokemon Yet</h1>
  }

  public render() {
    return (
      <div className="offset-md-2 col-md-8">
        <this.pokeInfos />
      </div>
    );
  }
}
