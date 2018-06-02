import * as React from 'react';
import './App.css';

import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { Login } from './components/home/home';

// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path='/' component={Login}/>
      </Switch>
    );
  }
}

export default App;
