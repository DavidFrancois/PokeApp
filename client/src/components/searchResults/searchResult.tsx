import * as React from 'react';

import pokeStore from './../../stores/pokestore';


export class SearchResult extends React.Component<{ search: string, seeDetail: any  }, { matched: string[] }> {

  constructor(props: any){
    super(props);
    this.state = { matched: [] };
  }

  public componentDidMount () {
    pokeStore.addListener((data: string[]) => {
      this.suggest(data);
    });
  }


  public suggestions = () => {
    return (
      this.state.matched.map((match) =>
        <li key={match} onClick={() => this.props.seeDetail(match)}> {match} </li>
      )
    );
  }

  public render() {
    return (
      <div className="offset-md-2 col-md-8">
        <ul>{this.suggestions()}</ul>
      </div>
    );
  }

  private suggest = (data: string[]): void => {
    this.setState(prev => ({
      matched: prev.matched.concat(
        data.filter(str => str.startsWith(this.props.search))
      )
    }));
  }
}
