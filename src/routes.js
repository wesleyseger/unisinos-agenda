import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home/index';
import EventsDay from './pages/EventsDay/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/events/:day" component={EventsDay} />
        <Route path="*" component={() => <h2>Not found</h2>} />
      </Switch>
    </BrowserRouter>
  )
}