import React from 'react';
import { Route, Switch } from 'react-router-dom';

// HOCs & wrappers

// pages
import App from './pages/Index';
import NotFound from './pages/Errors/404';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Router;
