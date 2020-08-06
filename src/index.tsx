import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Router from './Router';
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./store";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
          <BrowserRouter>
              <Router />
          </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
