import * as React from 'react';
import { PokeType } from '../../models/type';

const typeList = (name: string, collection: any[]) => (
  <ul>{ collection.map((item, index) => {
    <li key={index}>
      { item[name].name }
    </li>
    })}
  </ul>
)

const statList = (name: string, collection: any[]) => (
  <ul>{ collection.map((item, index) => {
    <li key={index}>
      { item[name].name } : {item[name].base_stat}
    </li>
    })}
  </ul>
)

const Pokemon = (pokemon: any, poketype: PokeType) =>
  (
    <div>
      <h1> Name: { pokemon.name } </h1>
      <br/>
      <p> ID: { pokemon.id } </p>
      <p> Height: { pokemon.height } </p>
      <p> Weight: { pokemon.weight } </p>
      {typeList("type", pokemon.types)}
      {statList("stat", pokemon.stats)}
      <img src={ pokemon.sprites.front_default} alt="front_default"/>
    </div>
  );

export default Pokemon;