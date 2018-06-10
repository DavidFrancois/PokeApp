import * as React from 'react';

import { RouteComponentProps } from 'react-router-dom';
import * as PokeService from '../../services/pokemon';


import './detail.css';
interface IHomeProps extends RouteComponentProps<any> {
}

export class Detail extends React.Component<IHomeProps, { pokemon: any }> {
  constructor(props: any){
    super(props);
    this.state = { pokemon: null };
    this.pokeInfos = this.pokeInfos.bind(this);
    this.getDetails = this.getDetails.bind(this);
  }

  public componentWillMount() {
    this.getDetails();
  }

  public getDetails() {
    PokeService.getPokemon(this.props.match.params.pokemon)
      .then((data) => {
        this.setState({ pokemon: data });
      });
  }


  public pokeInfos() {
    if (this.state.pokemon != null ) {
      return (
        <div>
          <h1> Name: { this.state.pokemon.name } </h1>
          <span> ID: { this.state.pokemon.id } </span>
          <span> Height: { this.state.pokemon.height } </span>
          <span> Weight: { this.state.pokemon.weight } </span>
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
