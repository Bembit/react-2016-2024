import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Posts from './components/posts/';
import PostDetail from './components/postdetail/';
import NewPost from './components/newpost/';
import EditPost from './components/EditPost';
import SideNav from './components/SideNav';

import './styles/App.css';
import './styles/Comments.css';
import './styles/PostDetails.css';
import './styles/PostsAll.css';

class App extends Component {
  render() {
    return(
      <div className="app">
        <div className="wrapper">
          <SideNav />
          <div className="mainpage">
            <Switch>
              <Route exact path ='/' component={Posts} />
              <Route exact path ='/new' component={NewPost} />
              <Route exact path ='/edit/:id' component={EditPost} />
              <Route exact path ='/:category' component={Posts} />
              <Route exact path ='/:category/:id' component={PostDetail} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default App;