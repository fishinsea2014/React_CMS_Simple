import React, {Component} from 'react';
import {Table} from 'antd';

class Events extends Component{

    render(){
        const dataSource =[
            {
                key: '1',
                title: 'Recruiting Affair',
                date: '01-02-2018',
                address: '5, Wakefield Str.'
            },

            {
                key: '2',
                title: 'Friday Party',
                date: '01-03-2018',
                address: '6, Wakefield Str.'
            },

            {
                key: '3',
                title: 'Happy new year party',
                date: '01-04-2018',
                address: '7, Wakefield Str.'
            },
            {
                key: '4',
                title: 'Recruiting Affair',
                date: '01-05-2018',
                address: '8, Wakefield Str.'
            },
        ];

        const columns =[
            {
                title:'Title',
                dataIndex:'title',
                key: 'title'
            },
            {
                title:'Date',
                dataIndex:'date',
                key: 'date'
            },
            {
                title:'Address',
                dataIndex:'address',
                key: 'address'
            },
        
        ]


        return(
            <div>This is events page
                <Table dataSource= {dataSource} columns={columns}></Table>
            </div>
        )
    }
}
export default Events;