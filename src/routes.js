import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewClient from './pages/NewClient';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/clients" exact component={NewClient} />
    </Switch>
  );
}
