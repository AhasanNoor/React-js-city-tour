import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import TourList from './Components/TourList/TourList';

import './Components/Navbar/Navbar';
import './App.scss';

class App extends Component {
  render(){
    return (
      <div className="App">
          <Navbar />
          <TourList />
      </div>
    );
  }
}

export default App;
