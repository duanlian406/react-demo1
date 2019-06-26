import React, { Component } from 'react';
import axios from '../../node_modules/axios';
import api from '../assets/api';
import { Link, Redirect } from "react-router-dom";
import auth from '../auth';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    componentDidMount() {
        this.fetchProductList();
    }
    fetchProductList = () => {
        axios.get(api.productList).then(({ data: { result } }) => {
            this.setState({
                list: result
            });
        });
    }
    render() {
        if (!auth.isLogin) {
            return (
                <Redirect to={{ pathname: '/login', state: { from: { pathname: '/productList' } } }}></Redirect>
            );
        }
        return (
            <div>
                {this.state.list.map((value, key) => {
                    return (
                        <div key={key}>
                            <h3>{value.title}</h3>
                            <ul>
                                {value.list.map((v, k) => {
                                    return (
                                        <li key={k}>
                                            <Link to={`/productContent?id=${v._id}`}>
                                                <h5>{v.title}</h5>
                                                <img src={`${api.host}${v.img_url}`} alt="img" />
                                                <p>{v.price}</p>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ProductList;