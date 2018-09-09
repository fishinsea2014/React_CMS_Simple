import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import './content.scss'


const { Content } = Layout

export default class Contents extends React.Component {
  render() {
    return (
      <Content className="content">
        Here is content.
      </Content>
    );
  }
}