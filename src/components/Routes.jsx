import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Signin from './Signin';
import Signup from './Signup';

const Routes = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Signin}/>
        <Route path='/signup' component={Signup}/>
      </Switch>
    </main>
  );
}

export default Routes;
