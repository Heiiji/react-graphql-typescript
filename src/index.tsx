import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Router from './Router';
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import Header from "./organism/Header";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
          <BrowserRouter>
              <Header/>
              <Router />
          </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
