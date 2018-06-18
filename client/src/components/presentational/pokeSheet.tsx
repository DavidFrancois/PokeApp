import * as React from 'react';
import { getTweets } from './../../services/tweets';
import TweetEmbed from 'react-tweet-embed';

import './css/detail.css';

interface IPokeSheetProps {
  pokemon: any,
  isFetching: boolean,
  found: string,
  types: any[]
}

interface IPokeSheetState {
  tweetIds: string[];
}

export default class PokeSheet extends React.Component<IPokeSheetProps, IPokeSheetState> {

  public componentWillMount () {
    this.fetchTweets();
  }

  public fetchTweets = () => {
    getTweets(this.props.found).then((data: any) => {
      this.setState({ tweetIds: data.statuses.map((s: any) => s.id_str)});
    }).then(() => {
      // Re Fetch tweets every 10 second, easy fast dev solution
      setTimeout(() => this.fetchTweets(), 10000);
    });
  }

  public tweet = () =>
    (
      <div className="offset-md-3 col-md-6">
        { this.state.tweetIds.map((id: string) => <TweetEmbed id={id} />)}
      </div>
    )

  public pokeStats = () =>
    (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">hp</th>
            <th scope="col">attack</th>
            <th scope="col">defense</th>
            <th scope="col">sp atk</th>
            <th scope="col">sp def</th>
            <th scope="col">speed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{ this.props.pokemon.name }</th>
            <td>{this.props.pokemon.stats.hp}</td>
            <td>{this.props.pokemon.stats.attack}</td>
            <td>{this.props.pokemon.stats.defense}</td>
            <td>{this.props.pokemon.stats.sp_atk}</td>
            <td>{this.props.pokemon.stats.sp_def}</td>
            <td>{this.props.pokemon.stats.speed}</td>
          </tr>
              { this.props.types.filter((t: any) => this.props.pokemon.types.indexOf(t.name) >= 0 )
            .map((t: any) => (
              <tr>
                <th scope="row">{ t.name } average </th>
                <td>{t.statAvg.hp}</td>
                <td>{t.statAvg.attack}</td>
                <td>{t.statAvg.defense}</td>
                <td>{t.statAvg.sp_atk}</td>
                <td>{t.statAvg.sp_def}</td>
                <td>{t.statAvg.speed}</td>
              </tr>
          )) }
        </tbody>
      </table>
    );

  public pokeInfos = () => {
      return (
        <div>
          <div className="card-header">
            <h1> { this.props.pokemon.name } </h1>
          </div>
          <div className="card-body">
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.props.pokemon.id + ".png"} alt="default"/>
            <br/>
            {/* <p> ID: { this.props.pokemon.id } </p> */}
            <this.pokeStats />
          </div>
        </div>
      );
    }

  public render() {
    return (
      <div className="offset-md-2 col-md-8 card content-wrapper text-center">
        { this.props.isFetching === true &&
            <span className="loader"></span>
            // <span>We're Loading Pokémon data</span>
        }
        {this.props.isFetching === false &&
          <this.pokeInfos />
        }
        { this.state && this.state.tweetIds.length > 0 && <this.tweet />}
      </div>
    );
  }
}
