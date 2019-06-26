import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { title: 1111, id: 0 },
                { title: 2222, id: 1 },
                { title: 3333, id: 2 },
                { title: 4444, id: 3 },
            ]
        };
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map((v, k) => {
                        return (
                            <li key={k}>
                                <Link to={`/news/newsDetails/${v.id}`}>{v.title}</Link>
                            </li>
                        )
                    })}
                </ul>
                <hr />
                <ul>
                    {this.state.items.map((v, k) => {
                        return (
                            <li key={k}>
                                <Link to={{ pathname: '/news/newsParams', state: v }}>{v.title}</Link>
                            </li>
                        )
                    })}
                </ul>

                {this.props.routes.map((route, key) => {
                    return (
                        <Route path={route.path} component={route.component} key={key}></Route>
                    )
                })}
            </div>
        );
    }
}

export default News;