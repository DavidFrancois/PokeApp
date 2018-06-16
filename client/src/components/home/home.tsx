import * as React from 'react';

import { connect } from "react-redux";
import Detail from '../containers/detail';

import SearchPokemon from '../containers/searchPokemons';
import Suggest from '../containers/suggest';

import './home.css';


interface IHomeProps {
  searching: boolean,
  searched: string,
  found: string
}

class Home extends React.Component<IHomeProps> {

  public render() {
    return (
      <div>
        <header>
          <SearchPokemon />
        </header>
        <main>
          { this.props.searching === true &&
            <Suggest />
          }
          {this.props.searching === false && this.props.found !== "" &&
            <Detail />
          }
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  found: state.global.found,
  searched: state.global.searched,
  searching: state.global.searching
})

export default connect(
  mapStateToProps,
  null
)(Home);
