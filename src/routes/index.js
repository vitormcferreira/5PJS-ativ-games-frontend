import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Page404 from '../pages/Page404';
import Index from '../pages/Index';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Index} isClosed />
      <MyRoute exact path="/login" component={Login} />
      <MyRoute exact path="/register" component={Register} />
      <MyRoute component={Page404} />
    </Switch>
  );
}
