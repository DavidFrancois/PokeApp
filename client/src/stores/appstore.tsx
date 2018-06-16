import { createStore } from 'redux';
import pokeApp from '../reducers/reducers';

const store = createStore(pokeApp);
export default store;
