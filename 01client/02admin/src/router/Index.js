import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createHashHistory } from "history";

import HomeView from "../views/home/HomeView";
import LoginView from "../views/login/LoginView";
import RegisterView from "../views/register/RegisterView";

const history = createHashHistory();

export default class Index extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router history={history}>
        <Route path="/" component={HomeView} />
        <Route path="/login" component={LoginView} />
        <Route path="/register" component={RegisterView} />
      </Router>
    );
  }
}
