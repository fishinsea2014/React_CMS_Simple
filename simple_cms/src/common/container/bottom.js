import React from 'react'
import { Layout } from 'antd'
import './bottom.scss'

const { Footer } = Layout

export default class Bottom extends React.Component {
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
                    <div><span className="me">@User</span>
                        <span className="stay">You already in the Home<span className="time">{this.state.timer}</span> 秒</span></div>
                </div>
            </Footer>
        );
    }
}