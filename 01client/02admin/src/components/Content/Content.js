import React from "react";
import { Layout } from "antd";
import "./Content.css";
import { Redirect, Route, Switch } from "react-router-dom";
import User from "../../views/user/User";
import Product from "../../views/product/Product";
const { Content } = Layout;
export default class MyContent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Content className="contentBox">
        <Switch>
          <Route exact path={"/"} component={User} />
          <Route exact path={"/product"} component={Product} />
        </Switch>
      </Content>
    );
  }
}
