import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'

import pokeApp from './reducers/reducers';
import App from './App';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(pokeApp);

ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker();
