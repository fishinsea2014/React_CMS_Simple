import React, { Component } from 'react';
import { Input, Icon,message } from 'antd';

class Salary extends Component {
  constructor(props){
    super(props);
    this.state={
        paye:'',
        acc:'',
        kiwiSaver:'',
        studentLoan:'',
        takeHome:''
    }
  }

  calcu = (e) =>{
      let data = e.target.value;
      if (data >= 100){
          message.success('Are you sure your input is right');
      }
      let paye = data*0.1656;
      let acc = data*0.014;
      let kiwiSaver = data*0.03;
      let studentLoan = data*0.0752;
      let takeHome = (data-paye-acc-kiwiSaver-studentLoan).toFixed(2);
      this.setState({
          paye:paye,
          acc:acc,
          kiwiSaver:kiwiSaver,
          studentLoan: studentLoan,
          takeHome: takeHome
      })
  }
  
  render() {
    return (
      <div className="tab-box">
          Income Calculator
          <div style={{marginBottom: 20}}> 
            <Input addonBefore="Gross Pay/ Week" addonAfter="$" onChange={(event)=>this.calcu(event)} ></Input>
          </div>
          <div style={{marginBottom: 20}}> 
            <Input addonBefore="PAYE" addonAfter="$" value={this.state.paye} className="tab-red" />
          </div>
          <div style={{marginBottom: 20}}> 
            <Input addonBefore="ACC" addonAfter="$" value={this.state.acc} className="tab-red" />
          </div>
          <div style={{marginBottom: 20}} > 
            <Input addonBefore="KiwiSaver" addonAfter="$" value={this.state.kiwiSaver} ></Input>
          </div>
          <div style={{marginBottom: 20}}> 
            <Input addonBefore="Student Loan" addonAfter="$" value={this.state.studentLoan} ></Input>
          </div>
          <div style={{marginBottom: 20}}> 
            <Input addonBefore="Take Home Pay" addonAfter="$" value={this.state.takeHome} ></Input>
          </div>
      </div>
    );
  }
}

export default Salary;