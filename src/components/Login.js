import React, { Component } from 'react';
import auth from '../auth';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    login = () => {
        let from = this.props.location.state.from;
        auth.login(this.refs.username.value,this.refs.password.value).then(()=>{
            this.props.history.push(from);
        },()=>{
            alert('retry');
        });
    }
    render() {
        return (
            <div>
                <div>
                    用户名：<input type="text" ref="username" />
                </div>
                <div>
                    密码：<input type="password" ref="password" />
                </div>
                <div>
                    <button onClick={this.login}>登录</button>
                </div>
            </div>
        );
    }
}

export default Login;