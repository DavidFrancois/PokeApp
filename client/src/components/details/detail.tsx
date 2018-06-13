import * as React from 'react';

import * as PokeService from '../../services/pokemon';


import './detail.css';


export class Detail extends React.Component<{ poke: string }, { pokemon: any }> {
  constructor(props: any){
    super(props);
    this.state = { pokemon: null };
  }

  public componentDidMount() {
    this.getDetails();
  }

  public getDetails = (): void => {
    PokeService.getPokemon(this.props.poke)
      .then((data) => {
        this.setState({ pokemon: data });
      });
  }


  public pokeTypes = () => {
    return (
      this.state.pokemon.types.map((t: any) => <li key={t.type.slot}>{t.type.name}</li>)
    );
  }

  public pokeInfos = () => {
    if (this.state.pokemon != null ) {
      return (
        <div>
          <h1> Name: { this.state.pokemon.name } </h1>
          <br/>
          <p> ID: { this.state.pokemon.id } </p>
          <p> Height: { this.state.pokemon.height } </p>
          <p> Weight: { this.state.pokemon.weight } </p>
          <ul>{ this.pokeTypes() }</ul>
          <img src={this.state.pokemon.sprites.front_default} alt="front_default"/>
        </div>
      );
    }
    return <h1> Loading Ressource</h1>
  }

  public render() {
    return (
      <div className="offset-md-2 col-md-8">
        <this.pokeInfos />
      </div>
    );
  }
}
