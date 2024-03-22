import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import Bookstore from './Bookstore';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Main} />
        <Route exact path="/search" component={Bookstore} />
      </div>
    );
  }
}

export default App;
