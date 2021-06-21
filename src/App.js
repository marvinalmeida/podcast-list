import React from "react";

import Home from "./pages/Home/Home";
import PodCastDetail from "./pages/PodcastDetail/PodcastDetail";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/podcast/:id" component={PodCastDetail} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
