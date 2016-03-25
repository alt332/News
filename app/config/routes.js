import React from 'react';
import Main from '../components/Main';
import HackerNews from '../components/HackerNews';
import { IndexRoute, Route } from 'react-router';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={HackerNews} />
  </Route>
);
