import React from 'react';

export default class ClassClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    componentDidMount() {
        console.log('conponentDidMount'); 
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
        console.log(this.state.date);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <h2>It is currently {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}