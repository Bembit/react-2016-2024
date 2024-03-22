import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
import Search from './Search';

import ReallySmoothScroll from 'really-smooth-scroll';

import Portraits from './categories/Portraits';
import Weddings from './categories/Weddings';
import Fashion from './categories/Fashion';
import Nature from './categories/Nature';
import Others from './categories/Others';
import Mobile from './categories/Mobile';

ReallySmoothScroll.shim();

class App extends Component {

  render() {
    const { history } = this.props
    return (
      <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/Portraits" component={Portraits} onUpdate={() => window.scrollTo(0, 0)} history={history} />
        <Route exact path="/Fashion" component={Fashion} onUpdate={() => window.scrollTo(0, 0)} history={history} />
        <Route exact path="/Nature" component={Nature} onUpdate={() => window.scrollTo(0, 0)} history={history} />
        <Route exact path="/Weddings" component={Weddings} onUpdate={() => window.scrollTo(0, 0)} history={history} />
        <Route exact path="/Others" component={Others} />
        <Route exact path="/Mobile" component={Mobile} />
      </Switch>
      </div>
    );
  }
}

export default App;
