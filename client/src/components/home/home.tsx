import * as React from 'react';

import './home.css';
import globalStore from '../../stores/globalstore';
import { Detail } from '../details/detail';
import { SearchResult } from '../searchResults/searchResult';
import { SearchBar } from '../searchBar/searchBar';

export class Home extends React.Component<{}, { search: string, currPokemon: string }> {

  constructor(props: any){
    super(props);
    this.state = { search: '', currPokemon: '' };
  }

  public performSearch = (str: string) => {
    globalStore.setState("search");
    this.setState({search: str });
  }

  public seeDetails = (str: string) => {
    globalStore.setState("detail");
    this.setState({currPokemon: str });
  }

  public render() {
    return (
      <div>
        <header>
          <SearchBar performSearch={this.performSearch} />
        </header>
        <main>
          {globalStore.getState() === "search" &&
            <SearchResult search={this.state.search} seeDetail={this.seeDetails} />
          }

          {globalStore.getState() === "detail" &&
            <Detail poke={this.state.currPokemon} />
          }
        </main>
      </div>
    );
  }
}
