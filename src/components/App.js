import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalStyle from '../style/global';

import Home from '../components/Home';
import Content from '../components/Content';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/content" component={Content} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
