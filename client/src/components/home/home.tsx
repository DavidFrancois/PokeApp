import * as React from 'react';

import './home.css';
import { connect } from "react-redux";
import SearchPokemon from '../containers/searchPokemons';
import Suggest from '../containers/suggest';
import Detail from '../containers/detail';

type HomeProps = {
  searching: boolean,
  searched: string,
  found: string
}

class Home extends React.Component<HomeProps> {

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
    searching: state.global.searching,
    searched: state.global.searched,
    found: state.global.found
})

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(Home);
