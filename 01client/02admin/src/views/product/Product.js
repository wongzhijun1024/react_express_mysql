import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import { Row, Col, Input, Icon, Tooltip, Button, message } from "antd";
export default class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      inputPasswd: ""
    };
  }

  render() {
    return (
      <div className="view">
        <h1>产品页面</h1>
      </div>
    );
  }
}
