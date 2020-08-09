import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Router from './Router';
import { Provider } from "react-redux";
import { ApolloProvider } from '@apollo/client';
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import Header from "./organism/Header";
import { client } from "./_helpers/apollo";

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
