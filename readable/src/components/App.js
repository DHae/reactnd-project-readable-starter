import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ListContainer from './ListContainer';
import PostDetail from './PostDetail';
import AddPostButton from './AddPostButton';
import PostForm from './PostForm';
import Notfound from './PageNotFound';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={ListContainer} />
        <Route exact path="/" component={AddPostButton} />
        <Route exact path="/:category" component={AddPostButton} />
        <Switch>
          <Route path="/post/new" component={PostForm} />
          <Route path="/post/edit/:postId" component={PostForm} />
          <Route path="/:category/:postId" component={PostDetail} />
        </Switch>
        <Route path="/404" component={Notfound} />
        <Redirect from="*" to="/404" />
      </div>
    );
  }
}

export default App;