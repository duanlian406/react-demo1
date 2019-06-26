import React, { Component } from 'react';

class NewsParams extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    back = () => {
        this.props.history.push({pathname:'/news'});
    }
    render() {
        return (
            <div>
                {this.props.location.state.title}
                {this.props.location.state.id}
                <button onClick={this.back}>back</button>
            </div>
        );
    }
}

export default NewsParams;