import React, { Component } from 'react';

import Navigation from './Navigation';
import Bookshelf from './Bookshelf';
import AddNewBook from './AddNewBook';

class Main extends Component {
  render() {
    return (
      <div>
          <Navigation />
          <Bookshelf />
          <AddNewBook />
      </div>
    );
  }
}

export default Main;