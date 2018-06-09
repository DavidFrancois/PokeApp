import * as React from 'react';
import './App.css';
import * as PokeService from './services/pokemon';

import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { Home } from './components/home/home';
import { Login } from './components/login/login';



// import logo from './logo.svg';

class App extends React.Component<{}, { pokemons: string[] }> {

  constructor(props: any) {
    super(props);
    this.fetchPokemons = this.fetchPokemons.bind(this);
    this.state = { pokemons: [] };
  }

  public componentDidMount() {
    this.fetchPokemons();
  }

  public async fetchPokemons(queryParams: string = "?limit=200") {
    PokeService.getPokemon(queryParams)
      .then(data => {
        this.setState((prev) => ({
           pokemons: prev.pokemons.concat(data.results.map((r: any) => r.name))
        }));

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
          <Route path='/' exact={true} component={Home}/>
        </div>
      </Switch>
    );
  }
}

export default App;
