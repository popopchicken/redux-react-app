import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers/reducer';
import { createEpicMiddleware } from 'redux-observable';
import epics from './epics';

// Takes the combined epics and creates the epic
// middleware which will be injected in the redux store (will get actions a stream now)
const epicMiddleware = createEpicMiddleware(); // from: redux-observable
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  ),
)

epicMiddleware.run(epics);


/******************************* */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
