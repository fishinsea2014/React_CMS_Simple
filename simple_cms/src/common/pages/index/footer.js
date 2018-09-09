import React from 'react'
import { Layout } from 'antd'
import './footer.scss'

const { Footer } = Layout

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: 0
        }
    }

    tick = () => {
        this.setState({ timer:this.state.timer + 1 });
    }

    // Execute tick after component mounted
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    // Clear the interval after remove the component
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <Footer className="bottom animated bounceInLeft">
                <div className="text">
                    <div>
                        <span className="me">Hello, {localStorage.getItem('userName')} </span>
                        <span className="stay">You have stayed in the CDIG CMS for 
                            <span className="time">{this.state.timer}</span> 
                            Second 
                        </span>
                    </div>
                </div>
            </Footer>
        );
    }
}