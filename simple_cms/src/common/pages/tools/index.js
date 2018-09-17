import React, {Component} from 'react';
import {Tabs} from 'antd';
import Salary from './components/salary';
import Events from './components/events';
import Construction from './components/constructing';

import './index.scss'

const TabPane = Tabs.TabPane;
class Tools extends Component{
    render(){

        return (
        <div>
            <div>This is Tools</div>
            <Tabs defaultActiveKey="1"> 
                <TabPane tab="Salary" key="1"><Salary/></TabPane>
                <TabPane tab="Events" key="2"><Events/></TabPane>
                <TabPane tab="Construction..." key="3"><Construction/></TabPane>

                {/* <TabPane tab="Salary Cal" key="1"><Salary></Salary></TabPane> */}

            </Tabs>
        </div>
        );
    };    
}

export default Tools;