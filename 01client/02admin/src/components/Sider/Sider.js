import React from "react";
import { Menu, Icon, Layout } from "antd";
import "./Sider.css";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
const { Sider } = Layout;
export default class MySider extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  toggleCollapsed(collapsed) {
    console.log(collapsed);
    this.setState({
      collapsed: collapsed
    });
  }

  render() {
    return (
      <Sider className="siderBox">
        <div className="iconBox">
          <img
            className="icon"
            src="http://a.hiphotos.baidu.com/image/pic/item/838ba61ea8d3fd1fc9c7b6853a4e251f94ca5f46.jpg"
          ></img>
          <div className="inforBox">
            <div>Mark Stephen</div>
            <div>Web Designer</div>
          </div>
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Link to={"/"}>
              <Icon type="pie-chart" />
              <span> 用户管理页面 </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={"/product"}>
              <Icon type="desktop" />
              <span> 产品管理页面 </span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
