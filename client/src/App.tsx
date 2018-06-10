import * as React from 'react';
import './App.css';
import * as PokeService from './services/pokemon';

import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { Home } from './components/home/home';
import { Login } from './components/login/login';

import pokeStore from './stores/pokestore';

class App extends React.Component {

  constructor(props: any) {
    super(props);
    this.fetchPokemons = this.fetchPokemons.bind(this);
  }

  public componentWillMount() {
    this.fetchPokemons();
  }

  public async fetchPokemons(queryParams: string = "?limit=200") {
    PokeService.getPokemon(queryParams)
      .then(data => {
        pokeStore.addPokemons(data.results.map((r: any) => r.name));
        if (data.next != null) {
          const next = data.next.split('/');
          this.fetchPokemons(next[next.length - 1]);
        }
      });
  }

  public render() {
    return (
      <Switch>
        {/* Router only support one child element, so wrap routes in a div */}
        <div>
          <Route  path='/login' component={Login}/>
          <Route path='/' exact={true} component={Home} />
        </div>
      </Switch>
    );
  }
}

export default App;
