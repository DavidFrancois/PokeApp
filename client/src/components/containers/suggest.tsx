import { connect } from "react-redux";

import { setFound } from "../../actions/actionTypes";
import SuggestList from "../presentational/suggestList";

const mapStateToProps = (state: any) => {
  return {
    suggestions: state.pokemon.pokemons
      .filter((p: any) => p.name.startsWith(state.global.searched))
      .map((p: any) => p.name)
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  setFound: (name: string) => dispatch(setFound(name))
});

const Suggest = connect(
  mapStateToProps,
  mapDispatchToProps
)(SuggestList)

export default Suggest;