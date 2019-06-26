import React, { Component } from 'react';
import axios from '../../node_modules/axios';
import fetchJsonp from '../../node_modules/fetch-jsonp'; 

class GetData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            axios:[],
            fetchJsonp:[]
        };
    }
    getAxiosData = () => {
        axios.get('http://localhost:8080/getData').then(({data:{items}})=>{
            this.setState({
                axios:items
            });
        });
    }
    getFetchJsonpData = () => {
        fetchJsonp('http://localhost:8080/getDataJsonp').then(res=>res.json()).then(({items})=>{
            this.setState({
                fetchJsonp:items
            });
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.getAxiosData}>获取axios数据</button>
                {this.state.axios.map((v,k)=>{
                    return <p key={k}>{v}</p>
                })}
                <button onClick={this.getFetchJsonpData}>获取fetchJsonp数据</button>
                {this.state.fetchJsonp.map((v,k)=>{
                    return <p key={k}>{v}</p>
                })}
            </div>
        );
    }
}

export default GetData;