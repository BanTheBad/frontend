import React from 'react';
import { Route, Switch } from 'react-router-dom';

// HOCs & wrappers

// pages
// import App from './pages/Index';
import NotFound from './pages/Errors/404';
import AdminLogin from './pages/AdminLogin';
import VictimsList from './pages/VictimsList';
import Cases from './pages/Cases';
import Case from './pages/Case';
import TopNav from './unit-components/TopNav/TopNav';

const Router = () => {
  return (
    <div>
      <TopNav />
      <Switch>
        <Route path="/" exact component={Cases} />
        <Route path="/admin-login" exact component={AdminLogin} />
        <Route path="/victims" exact component={VictimsList} />
        <Route path="/cases" exact component={Cases} />
        <Route path="/cases/:caseId" exact component={Case} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Router;
