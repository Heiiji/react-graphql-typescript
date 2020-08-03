import React from 'react';
import './App.css';
import Header from './organism/Header';
import SearchZone from './organism/SearchZone';
import RoomList from './organism/RoomList';
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
      <Header/>
      <SearchZone/>
      <RoomList/>
    </div>
  );
}

export default App;
