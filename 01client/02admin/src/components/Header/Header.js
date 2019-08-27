import React from "react";
import { Layout, Button, Icon } from "antd";
import "./Header.css";
const { Header } = Layout;
export default class MyHeader extends React.Component {
  constructor(props) {
    super();
    this.state = {
      collapsed: true,
      toggleCollapsedHead: props.toggleCollapsedHome
    };
  }

  toggleCollapsed() {
    let buffer = this.state.collapsed;
    if (buffer) {
      buffer = false;
    } else {
      buffer = true;
    }

    this.setState({
      collapsed: buffer
    });

    this.state.toggleCollapsedHead(buffer);
  }
  render() {
    return (
      <Header className="headBox">
        <div className="titleBox">
          <div className="title">有限公司后台管理</div>

          <Icon
            className="icon"
            onClick={this.toggleCollapsed.bind(this)}
            type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
          />
        </div>
      </Header>
    );
  }
}
