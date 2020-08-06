import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Router from './Router';
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { rootReducer } from "./store/index";
import { BrowserRouter } from "react-router-dom";

const store = applyMiddleware(thunk)(createStore);

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const w = window as any;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store(rootReducer, w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__())}>
      <ApolloProvider client={client}>
          <BrowserRouter>
              <Router />
          </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
