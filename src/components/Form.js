import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            gender: 1,
            citys: ['北京', '上海', '广州'],
            city: '',
            hobby: [
                { value: '足球', checked: false },
                { value: '篮球', checked: false },
                { value: '乒乓球', checked: false },
            ],
            des: ''
        };
    }
    handleUsername = (e) => {
        this.setState({
            username: e.target.value.trim()
        });
    }
    handlePassword = (e) => {
        this.setState({
            password: e.target.value.trim()
        });
    }
    handleGender = (e) => {
        this.setState({
            gender: +e.target.value
        });
    }
    handleCity = (e) => {
        this.setState({
            city: e.target.value
        });
    }
    handleHobby(i) {
        let hobby = this.state.hobby;
        hobby[i].checked = !hobby[i].checked;
        this.setState({ hobby });
    }
    handleDes = (e) => {
        this.setState({
            des: e.target.value.trim()
        });
    }
    handleSubmit = (e) => {
        let {username,password,gender,city,hobby,des} = this.state;
        hobby = hobby.filter(item=>item.checked).map(item=>item.value);
        console.log({username,password,gender,city,hobby,des})
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">用户名：</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsername} id="username" />
                </div>
                <div>
                    <label htmlFor="password">密码：</label>
                    <input type="password" value={this.state.password} onChange={this.handlePassword} id="password" />
                </div>
                <div>
                    <input type="radio" checked={this.state.gender === 0} value="0" onChange={this.handleGender} />男
                    <input type="radio" checked={this.state.gender === 1} value="1" onChange={this.handleGender} />女
                </div>
                <div>
                    <select value={this.state.city} onChange={this.handleCity}>
                        {this.state.citys.map((v, k) => {
                            return <option key={k} value={v}>{v}</option>
                        })}
                    </select>
                </div>
                <div>
                    {this.state.hobby.map((v, k) => {
                        return (
                            <span key={k}>
                                <input type="checkbox" checked={v.checked} onChange={this.handleHobby.bind(this, k)} />{v.value}
                            </span>
                        );
                    })}
                </div>
                <div>
                    <label htmlFor="des">个人简介：</label>
                    <textarea id="des" value={this.state.des} onChange={this.handleDes}></textarea>
                </div>
                <div>
                    <button type="submit">提交</button>
                </div>
            </form>
        );
    }
}

export default Form;