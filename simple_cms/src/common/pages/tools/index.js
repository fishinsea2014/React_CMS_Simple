import React, {Component} from 'react';
import {Tabs} from 'antd';
import Salary from './components/salary';

import './index.scss'

const TabPane = Tabs.TabPane;
class Tools extends Component{
    render(){

        return (
        <div>
            <div>This is Tools</div>
            <Tabs defaultActiveKey="1"> 
                <TabPane tab="Salary Cal" key="1"><Salary></Salary></TabPane>

            </Tabs>
        </div>
        );
    };    
}

export default Tools;