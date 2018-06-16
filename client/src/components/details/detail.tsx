import * as React from 'react';

import * as PokeService from '../../services/pokemon';
import typestore from '../../stores/typestore';


import './detail.css';
import { PokeType } from '../../models/type';


export class Detail extends React.Component<{ poke: string }, { pokemon: any, pokeTypes: PokeType[] }> {
  constructor(props: any){
    super(props);
    this.state = { pokemon: null, pokeTypes: [] };
  }

  public componentWillMount() {
    if (this.state.pokemon === null) {
      PokeService.getPokemon(this.props.poke).then(poke => {
        this.setState({pokemon: poke});
      });
    }
  }

  public componentDidMount() {
    typestore.addAvgListener((toto: string) => {
      console.log("LAUNCHED", typestore.getTypes(this.state.pokemon.types
        .map((t: any) => t.name)), this.state.pokemon.types);
      this.setState({
        pokeTypes: typestore.getTypes(this.state.pokemon.types
          .map((t: any) => t.name))
      });
    });
  }

  public getStats = (name: string) => {
    console.log("getStats", this.state.pokeTypes);
    if (this.state.pokeTypes.length === 0) return <div>Loading</div>
    return (Array.from(this.state.pokeTypes[name].getStatMap())
      .map(arr =><span>{arr[0]} :  {arr[1]}</span>))
  }

  public pokeTypes = () => {
    console.log("poketypes")
    return (
      this.state.pokemon.types.map((t: any) =>
        <li key={t.type.slot}>
          Average {t.type.name} pokemon stats : {this.getStats(t.type.name)}
        </li>
      ));
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
