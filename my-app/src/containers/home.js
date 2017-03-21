import React from 'react';
import {Header} from '../components/header.js';
import {AddHobby} from '../components/addHobby.js';
import {HobbyList} from '../components/hobbyList.js'

class Home extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className="hobbiesContainer">
          <AddHobby />
          <HobbyList />
        </div>
      </div>
    );
  }
  
}

module.exports.Home = Home;
