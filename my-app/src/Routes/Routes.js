import React from "react";
import { Switch, Route } from "react-router-dom";

import Projects from "../Pages/Projects/Projects";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/projetos' component={Projects} />
      <Route exact path='/contato' component={Contact} />
    </Switch>
  );
}

export default Routes;
