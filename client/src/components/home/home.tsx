import * as React from 'react';

import { connect } from "react-redux";
import Detail from '../containers/detail';

import SearchPokemon from '../containers/searchPokemons';
import Suggest from '../containers/suggest';
import { addUrlProps, UrlQueryParamTypes } from "react-url-query";
import { setFound } from "../../actions/actionTypes";

import './home.css';


interface IHomeProps {
  searching: boolean,
  searched: string,
  found: string,
  searchUrl: string,
  setFound: any
}

const urlPropsQueryConfig = {
  searchUrl: { type: UrlQueryParamTypes.string }
};


class Home extends React.Component<IHomeProps> {

  public searchFromUrl = () => {
    this.props.setFound(this.props.searchUrl);
  }

  public componentWillMount() {
    if (this.props.searchUrl && this.props.searchUrl !== "") this.searchFromUrl()
  }

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

const mapDispatchToProps = (dispatch: any) => ({
  setFound: (name: string) => dispatch(setFound(name))
});

export default addUrlProps(urlPropsQueryConfig)(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));
