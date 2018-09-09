import React from 'react';
import { Form, Input, Button, notification, Icon } from 'antd';
import { Redirect } from 'react-router-dom'
import './index.scss'

const FormItem = Form.Item; 

class LoginPage extends React.Component {
    
    handleSubmit = (e) => {
        e.preventDefault();
        let userName = this.props.form.getFieldsValue().username;
        let pwd = this.props.form.getFieldsValue().password;
        if (userName === '123' && pwd === '123') {
            // Routes in the form
            this.props.history.push('/index');
            localStorage.setItem('userName',userName);
           
        } else {
            this.openNotificationWithIcon('info');
        }
    }


    // The tips of username and password
    openNotificationWithIcon = (type) => {
        return notification[type]({
                 message: 'Both test user name and pwd are 123',
                 description: 'Is 123',
                 duration: 6,
                 icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
               })
    }

    componentDidMount() {
        this.openNotificationWithIcon('info');
    }

    render() {
        const { getFieldDecorator } = this.props.form        
        return (
            <div className="loginpagewrap">
                <div className="box">
                    <p>Welcome to the CDIG Content Management System</p>
                    <div className="loginWrap">
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Input User name' }],
                                })(
                                    <Input placeholder="Username" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Input Password' }],
                                })(
                                    <Input type="password" placeholder="Password" />
                                )}
                            </FormItem>
                            <Button type="primary" htmlType="submit" className="loginBtn">Login</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

let Login = Form.create()(LoginPage);
export default Login;