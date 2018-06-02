import * as React from 'react';
import './App.css';

import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { Home } from './components/home/home';
import { Login } from './components/login/login';


// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <Switch>
        {/* Router only support one child element, so wrap routes in a div */}
        <div>
          <Route exact={true} path='/' component={Login}/>
          <Route path='/home' component={Home}/>
        </div>
      </Switch>
    );
  }
}

export default App;
