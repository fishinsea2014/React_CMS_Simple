import React, { Component } from 'react';
import { Layout, Menu, Icon,Switch } from 'antd';
import {Link } from "react-router-dom";
import { allMenu } from '../utils/menu';
import Top from './top';
import Content from './content';
import './index.scss';
const { Header, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Index extends Component {  
    state = {
      theme: 'dark',
      current: 'index',
      collapsed: false,
      mode: 'inline',  // Horizontal display
    }
  componentDidMount() {
    this.handleClick([], 'index')
  }
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      mode: this.state.collapsed ? 'inline' : 'vertical',
    });
  }
  clear = () => {
    this.setState({
      current: 'index',
    });
  }
  handleClick = (e, special) => {
    this.setState({
      current: e.key || special,
    });
  }  
    render() {
    return (
      <Layout className="containAll">
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          className="leftMenu"
        >
          {this.state.theme === 'light' ? <Icon type="github" className="github" />:
            <Icon type="github" className="github white" /> }
          { this.state.theme === 'light' ? <span className="author">CDIG</span> : <span className="author white">CDIG</span> }
          <Menu
            theme={this.state.theme}
            onClick={this.handleClick}
            defaultOpenKeys={['']}
            selectedKeys={[this.state.current]}
            className="menu"
            mode={this.state.mode}
          >
          {
              allMenu.map((subMenu) => {
                if (subMenu.children && subMenu.children.length) {
                  return (
                    <SubMenu key={subMenu.url} title={<span><Icon type={subMenu.icon} /><span>{subMenu.name}</span></span>}>
                      {subMenu.children.map(menu => (
                        <Menu.Item key={menu.url}><Link to={`/index/${menu.url}`}>{menu.name}</Link></Menu.Item>
                      ))}
                    </SubMenu>
                  )
                }
                return (
                  <Menu.Item key={subMenu.url}>
                    <Link to={`/${subMenu.url}`}>
                      <Icon type={subMenu.icon} /><span className="nav-text">{subMenu.name}</span>
                    </Link>
                  </Menu.Item>
                )
              })
            }
          </Menu>
          <div className="switch">
            <Switch
              checked={this.state.theme === 'dark'}
              onChange={this.changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
          </div>
        </Sider>
        <Layout>
          <Top toggle={this.toggle} collapsed={this.state.collapsed} history={this.props.history}/> 
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            This is main
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            This is footer.
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Index;
