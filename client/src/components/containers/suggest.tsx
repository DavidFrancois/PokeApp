import { connect } from "react-redux";

import SuggestList from "../presentational/suggestList";
import { pushUrlQuery } from 'react-url-query';

const mapStateToProps = (state: any) => {
  return {
    suggestions: state.pokemon.pokemons
      .filter((p: any) => p.name.startsWith(state.global.searched))
      .map((p: any) => p.name)
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  setFound: (name: string) => pushUrlQuery({ searchUrl: name })
});

const Suggest = connect(
  mapStateToProps,
  mapDispatchToProps
)(SuggestList)

export default Suggest;