import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class EchartsOne extends Component {
  render() {
      const option = {
            //backgroundColor: '#6e80b2',  
            color:['#6e80b2'],   //Color of chart
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLabel:{
                    textStyle:{   
                        color:'#6e80b2'
                    }
                }, 
                axisLine:{
                    lineStyle:{     
                        color:'#6e80b2'
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLabel:{
                    textStyle:{   
                        color:'#6e80b2'
                    }
                }, 
                axisLine:{
                    lineStyle:{     
                        color:'#6e80b2'
                    }
                }
            },
            series: [{
                //data: [80, 932, 341, 934, 1290, 1330, 1320],
                //When retrive data from server, transfer data from parent component, like:
                data:this.props.option, 
                type: 'line'
            }]
        };
    return (
      <ReactEcharts
            option={option}
            style={{height:'220px',width:'100%'}}
        ></ReactEcharts>
    );
  }
}

export default EchartsOne;