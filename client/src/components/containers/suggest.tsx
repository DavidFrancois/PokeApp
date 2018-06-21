import { connect } from "react-redux";
import {  urlPushAction } from 'react-url-query';

import SuggestList from "../presentational/suggestList";

const changeUrlFound = urlPushAction(
  'CHANGE_URL_FOUND',
  (query: any) => ({ pokemon: String(query.pokemon) })
);

const mapStateToProps = (state: any) => {
  return {
    suggestions: state.pokemon.pokemons
      .filter((p: any) => p.name.startsWith(state.global.searched))
      .map((p: any) => p.name)
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  setFound: (name: string) => {
    dispatch(changeUrlFound({ pokemon: name }));
  }
});

const Suggest = connect(
  mapStateToProps,
  mapDispatchToProps
)(SuggestList)

export default Suggest;