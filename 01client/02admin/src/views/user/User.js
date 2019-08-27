import React from "react";
import { Link } from "react-router-dom";
import "./User.css";
import { Row, Col, Input, Icon, Tooltip, Button, message } from "antd";
export default class User extends React.Component {
  constructor() {
    super();
    this.state = {
      inputPasswd: ""
    };
  }

  render() {
    return (
      <div className="view">
        <h1>用户管理页面</h1>
      </div>
    );
  }
}
