import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Signin from './Signin';
import Signup from './Signup';
import ShowPost from './ShowPost';
import AddPost from './AddPost';
import ShowProfile from './ShowProfile';

const Routes = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={ShowPost} />
        <Route path="/profile" component={ShowProfile} />
        <Route path="/addpost/:id?" component={AddPost} />
      </Switch>
    </main>
  );
};

export default Routes;
