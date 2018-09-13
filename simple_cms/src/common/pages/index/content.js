import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";
import { Layout } from 'antd';
import Home from '../home';
import Music from '../music';
import './content.scss'
const { Content } = Layout;

class Contents extends Component {
  render() {
    return (
      <Content className="content">
         <Route  exact path="/index" component={Home}></Route> 
         <Route  path="/index/music" component={Music}></Route>
         
      </Content>
    );
  }
}

export default Contents;
