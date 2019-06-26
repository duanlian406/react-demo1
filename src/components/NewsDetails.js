import React, { Component } from 'react';

class NewsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <h1>{this.props.match.params.id}</h1>
            </div>
        );
    }
}

export default NewsDetails;