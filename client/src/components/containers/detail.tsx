import { connect } from "react-redux";
import PokeSheet from "../presentational/pokeSheet";

const mapStateToProps = (state: any) => {
  return {
    pokemon: state.pokemon.pokemons.filter((p: any) => p.name === state.global.found)[0],
    isFetching: state.pokemon.isFetching,
    found: state.global.found,
    types: state.poketype.poketypes
  }
}

const Detail = connect(
  mapStateToProps,
  null
  // mapDispatchToProps
)(PokeSheet)

export default Detail;