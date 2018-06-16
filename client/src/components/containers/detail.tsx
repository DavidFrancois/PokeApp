import { connect } from "react-redux";
import PokeSheet from "../presentational/pokeSheet";

const mapStateToProps = (state: any) => {
  return {
    found: state.global.found,
    isFetching: state.pokemon.isFetching,
    pokemon: state.pokemon.pokemons.filter((p: any) => p.name === state.global.found)[0],
    types: state.poketype.poketypes
  }
}

const Detail = connect(
  mapStateToProps,
  null
  // mapDispatchToProps
)(PokeSheet)

export default Detail;