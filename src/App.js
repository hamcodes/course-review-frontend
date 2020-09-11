import React from 'react';
import { Route } from 'react-router-dom';
import Courses from './containers/Courses';
import NavBar from './components/NavBar';
import Home from './components/Home';
import UserInfo from './components/UserInfo';

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <NavBar />
        <Route exact path='/' component={ Home } />
        <Courses />
        <UserInfo email="email@email.com" username="bob"/>
      </div>
    );
  }
};

export default App;