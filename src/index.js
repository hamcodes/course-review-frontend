import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import courseReducer from './reducers/courseReducer';
import App from './App';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let store = createStore(courseReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store = { store }>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);