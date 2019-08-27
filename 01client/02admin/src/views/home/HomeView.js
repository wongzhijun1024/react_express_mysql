import React from "react";
import { Layout } from "antd";
import "./Home.css";
import Header from "../../components/Header/Header";
import Sider from "../../components/Sider/Sider";
import Content from "../../components/Content/Content";

const { Footer } = Layout;
export default class HomeView extends React.Component {
  constructor() {
    super();
  }

  toggleCollapsed(collapsed) {
    //获得sider对象
    let sider = this.refs.sider;
    //更改sider对象里面的变量
    sider.toggleCollapsed(collapsed);
  }

  render() {
    return (
      <Layout className="layout">
        <Header toggleCollapsedHome={this.toggleCollapsed.bind(this)}></Header>
        <Layout>
          <Sider ref="sider"></Sider>
          <Layout>
            <Content></Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
