import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
const option = {
    title: {
        text: 'Sales',
        subtext: 'Global Markets'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011', '2012']
    },
    grid: {
        left: '5%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['NZ','AUS','USA','INDIA','CHINA','JAPAN']
    },
    series: [
        {
            name: '2011',
            type: 'bar',
            data: [22, 23, 234, 10, 13, 63]
        },
        {
            name: '2012',
            type: 'bar',
            data: [19, 23, 31, 14, 13, 6]
        }
    ]
};
const EchartsOne =()=>(
<ReactEcharts
    option={option}
    style={{height:'220px',width:'100%'}}
></ReactEcharts>
);
export default EchartsOne;