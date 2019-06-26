import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h1>
                    {this.props.title}
                    <span>{this.props.data.length}</span>
                </h1>
                <ul>
                    {this.props.data.map((v, k) => {
                        return (
                            <div key={k}>
                                <input type="checkbox" checked={v.done} onChange={this.props.toggleCheck.bind(this, v)} />
                                <span>{v.name}</span>
                                <button onClick={this.props.removeItem.bind(this, v)}>删除</button>
                            </div>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
List.defaultProps = {
    'title': '正在进行'
};
List.propTypes = {
    'title':PropTypes.string
};
export default List;