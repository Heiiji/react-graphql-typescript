import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query Gt {
    test
  }
`;

function App() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  return (
    <div className="App">

    </div>
  );
}

export default App;
