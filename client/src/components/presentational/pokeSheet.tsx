import * as React from 'react';

import '../details/detail.css';

type PokeSheetProps = {
  pokemon: any,
  isFetching: boolean,
  found: string,
  types: any[]
}

export default class PokeSheet extends React.Component<PokeSheetProps> {
  // public getStats = (name: string) => {
  //   if (this.state.pokeTypes.length === 0) return <div>Loading</div>
  //   return (Array.from(this.state.pokeTypes[name].getStatMap())
  //     .map(arr =><span>{arr[0]} :  {arr[1]}</span>))
  // }

  typeStats = () => (
    <div>
      { this.props.types.filter((t: any) => this.props.pokemon.types.indexOf(t.name) >= 0 )
        .map((t: any) => (
        <ul>
          <li> height : {t.statAvg.height} </li>
          <li>weight: {t.statAvg.weight}</li>
          <li>hp: {t.statAvg.hp}</li>
          <li>attack: {t.statAvg.attack}</li>
          <li>defense: {t.statAvg.defense}</li>
          <li>sp_atk: {t.statAvg.sp_atk}</li>
          <li>sp_def: {t.statAvg.sp_def}</li>
          <li>speed: {t.statAvg.speed}</li>
        </ul>
      )) }
    </div>
  )

  pokeStats = () =>
    (
      <ul>
        <li> height : {this.props.pokemon.stats.height} </li>
        <li>weight: {this.props.pokemon.stats.weight}</li>
        <li>hp: {this.props.pokemon.stats.hp}</li>
        <li>attack: {this.props.pokemon.stats.attack}</li>
        <li>defense: {this.props.pokemon.stats.defense}</li>
        <li>sp_atk: {this.props.pokemon.stats.sp_atk}</li>
        <li>sp_def: {this.props.pokemon.stats.sp_def}</li>
        <li>speed: {this.props.pokemon.stats.speed}</li>
      </ul>
    );

  pokeInfos = () => {
    console.log(this.props.types);
      return (
        <div>
          <h1> Name: { this.props.pokemon.name } </h1>
          <br/>
          <p> ID: { this.props.pokemon.id } </p>
          <this.pokeStats />
          <this.typeStats />
          <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.props.pokemon.id + ".png"} alt="default"/>
        </div>
      );
    }

  render() {
    return (
      <div className="offset-md-2 col-md-8">
        { this.props.isFetching === true &&
          <span>Still Fetching Data</span> }
        {
          this.props.isFetching === false &&
          <this.pokeInfos />
        }
      </div>
    );
  }
}
