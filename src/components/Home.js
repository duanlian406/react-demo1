import React from 'react';
import '../assets/Home.css';
import girl from '../assets/images/1.jpg';
import auth from '../auth';
import { Link } from "react-router-dom";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            username: 'duanlian',
            items: [1, 2, 3, 4],
            isLogin: auth.isLogin
        };
    }
    removeItem(i) {
        this.setState({
            items: this.state.items.filter((v, k) => k !== i)
        });
    }
    valueChange = (e) => {
        this.setState({
            username: this.refs.username.value
        });
    }
    logout = () => {
        auth.logout();
        this.setState({
            isLogin:false
        })
    }
    render() {
        return (
            <div>
                {this.state.isLogin ? <button onClick={this.logout}>Logout</button> : <Link to={{ pathname: '/login', state: { from: { pathname: '/' } } }}>Login</Link>}
                <h1 style={{ color: 'green' }}>This this is a title</h1>
                <p className="red">{this.state.username}</p>
                <p>
                    <img src={require('../assets/images/1.jpg')} alt="girl" />
                    <img src={girl} alt="girl" />
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560325107827&di=625aa513c72e1a1c8f3fd513d6d54e51&imgtype=0&src=http%3A%2F%2Fs13.sinaimg.cn%2Fbmiddle%2F6a007651tb7085130c74c%26690" alt="girl" />

                </p>
                <div>
                    <input onChange={this.valueChange} value={this.state.username} ref="username" />
                    {this.state.username}
                    {this.refs.username ? this.refs.username.value : this.state.username}
                </div>
                <ul>
                    {this.state.items.map((v, k) =>
                        <li key={k}>
                            <span>{v}</span>
                            <button onClick={this.removeItem.bind(this, k)}>delelte</button>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Home;
