import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon, Switch, Layout } from 'antd'
import { allMenu } from '../../utils/menu'
import Header from './top'
import Content from './content'
import Footer from './bottom'
import './index.scss'

const SubMenu = Menu.SubMenu;
const {  Sider } = Layout;

class Index extends React.Component {
  state = {
    theme: 'dark',
    current: 'index',
    collapsed: false,
    mode: 'inline',  // Vertical
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
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
          {this.state.theme === 'light' ? <a href="https://github.com/MuYunyun/react-antd-demo" target='_blank' rel='noopener noreferrer'><Icon type="github" className="github" /></a> :
            <a href="https://github.com/MuYunyun/react-antd-demo" target='_blank' rel='noopener noreferrer'><Icon type="github" className="github white" /></a> }
          { this.state.theme === 'light' ? <span className="author">CDIG CMS</span> : <span className="author white">CDIG CMS</span> }
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
                        <Menu.Item key={menu.url}><Link to={`/${menu.url}`}>{menu.name}</Link></Menu.Item>
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
          <Header style={{ background: '#fff', padding: 0 }} handleCollapse={this.toggleCollapsed.bind(this)}  />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              content
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Index;