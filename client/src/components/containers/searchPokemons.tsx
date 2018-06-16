import { connect } from "react-redux";

import { setSearched } from "../../actions/actionTypes";
import SearchBar from "../presentational/searchbar";

const mapDispatchToProps = (dispatch: any) => ({
    setSearched: (search: string) => dispatch(setSearched(search))
});

const SearchPokemon = connect(
  null,
  mapDispatchToProps
)(SearchBar)

export default SearchPokemon;