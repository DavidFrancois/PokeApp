import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom';
import { RouterToUrlQuery } from 'react-url-query';


import pokeApp from './reducers/reducers';
import App from './App';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(pokeApp);

ReactDOM.render((
    <Provider store={store}>
      <Router>
        <RouterToUrlQuery>
          <App />
        </RouterToUrlQuery>
      </Router>
    </Provider>
), document.getElementById('root'))

registerServiceWorker();
