import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { Row, Col, Input, Icon, Tooltip, Button, message } from "antd";
export default class LoginView extends React.Component {
  constructor() {
    super();
    this.state = {
      inputPasswd: ""
    };
  }

  toRegisterView() {
    this.props.history.push({ pathname: "/register", state: {} });
  }

  checkUser() {
    //1,获得用户提交的数据
    let userName = this.refs.inputUser.state.value;
    //2,如果用户名是空，就提醒用户输入数据
    if (userName.length < 1) {
      message.error("请输入用户名！");
      return;
    }
    //3,获得密码
    let inputPasswd = this.state.inputPasswd;
    if (inputPasswd.length < 1) {
      message.error("请输入密码！");
      return;
    }
    //2，提交数据到后台服务器
    //3，根据后台服务器返回的数据进行相关的操作

    localStorage.setItem("user", "小明");
    this.props.history.push({ pathname: "/", state: {} });
  }

  passwdChange(e) {
    //获得密码框里面的数据
    let passwd = e.target.value;
    //保存当前的密码到state
    this.setState({
      inputPasswd: passwd
    });
  }

  render() {
    return (
      <div className="view">
        <h1>登录页面</h1>
        <div className="loginVeiw">
          <div className="content">
            <Row className="row">
              <Col span={4}>用户名</Col>
              <Col span={20}>
                <Input
                  ref="inputUser"
                  className="input"
                  placeholder="输入你的用户名"
                  prefix={
                    <Icon type="reddit" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  suffix={
                    <Tooltip title="Extra information">
                      <Icon
                        type="info-circle"
                        style={{ color: "rgba(0,0,0,.45)" }}
                      />
                    </Tooltip>
                  }
                />
              </Col>
            </Row>
            <Row className="row">
              <Col span={4}>密码</Col>
              <Col span={20}>
                <Input.Password
                  onChange={this.passwdChange.bind(this)}
                  ref="inputPasswd"
                  placeholder="输入密码"
                  className="input"
                />
              </Col>
            </Row>
            <Row className="row">
              <Col span={12} className="col">
                <Button type="primary" onClick={this.checkUser.bind(this)}>
                  登录
                </Button>
              </Col>
              <Col span={12} className="col">
                <Button onClick={this.toRegisterView.bind(this)}>注册</Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
