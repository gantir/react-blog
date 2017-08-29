import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Signin from './Signin';
import Signup from './Signup';
import Home from './Home';

const Routes = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Signin}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/home' component={Home}/>
      </Switch>
    </main>
  );
}

export default Routes;
