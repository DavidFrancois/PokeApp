import { connect } from "react-redux";
import SearchBar from "../presentational/searchbar";
import { setSearched } from "../../actions/actionTypes";

const mapDispatchToProps = (dispatch: any) => ({
    setSearched: (search: string) => dispatch(setSearched(search))
});

const SearchPokemon = connect(
  null,
  mapDispatchToProps
)(SearchBar)

export default SearchPokemon;