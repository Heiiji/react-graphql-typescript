import React from 'react';
import './App.css';
import Header from './organism/Header';
import SearchZone from './organism/SearchZone';
import RoomList from './organism/RoomList';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchZone/>
      <RoomList/>
    </div>
  );
}

export default App;
