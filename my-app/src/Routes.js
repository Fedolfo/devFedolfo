import React from "react";
import { Switch, Route } from "react-router-dom";

import Body from "./components/Body";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Body} />
      <Route exact path='/projetos' component={Projects} />
      <Route exact path='/contato' component={Contact} />
    </Switch>
  );
}

export default Routes;
