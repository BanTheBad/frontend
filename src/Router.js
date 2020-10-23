import React from 'react';
import { Route, Switch } from 'react-router-dom';

// HOCs & wrappers

// pages
import App from './pages/Index';
import NotFound from './pages/Errors/404';
import AdminLogin from './pages/AdminLogin';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/admin-login" exact component={AdminLogin} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Router;
