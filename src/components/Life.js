import React, { Component } from 'react';

class Life extends Component {
    constructor(props) {
        console.log('init constructor')
        super(props);
        this.state = {
            title: 'aaaaa'
        };
    }
    componentWillMount() {
        console.log('componentWillMount')
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    shouldComponentUpdate(props,state) {
        console.log('shouldComponentUpdate',props,state);
        return true;
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    componentWillReceiveProps(props) {
        console.log('componentWillReceiveProps');
        console.log(props);
    }
    changeTitle = () => {
        this.setState({
            title:'bbbb'
        });
    }
    render() {
        console.log('render')
        return (
            <div>
                {this.state.title}
                <button onClick={this.changeTitle}>change title</button>
            </div>
        );
    }
}

export default Life;