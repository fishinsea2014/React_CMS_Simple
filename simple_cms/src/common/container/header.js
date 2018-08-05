import React from 'react'
import { Menu, Icon, Layout } from 'antd'
import { Link } from 'react-router-dom'
import './header.scss'

const SubMenu = Menu.SubMenu
const { Header } = Layout

class Top extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            username: localStorage.getItem('name') || ""
        }
    }

    render() {
        //debugger;
        return (
            <Header style={{ background: '#fff'}}>
                <Icon
                    className="trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                />
                <Menu mode="horizontal" className="logOut" >
                    <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>} >
                        <Menu.Item key="logOut">
                            <Link to="/login" >Quit</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>                
            </Header>
        );
    }
}

export default Top;