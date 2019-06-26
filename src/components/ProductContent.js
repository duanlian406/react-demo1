import React, { Component } from 'react';
import axios from '../../node_modules/axios';
import api from '../assets/api';

class ProductContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item:{}
        };
    }
    fetchProductContent(s) {
        axios.get(`${api.productContent}${s}`).then(({ data: { result:[item] } }) => {
            this.setState({item});
        });
    }
    componentWillMount() {
        this.fetchProductContent(this.props.location.search);
    }
    render() {
        return (
            <div>
                <h2>{this.state.item.title}</h2>
                <p>{this.state.item.num}</p>
                <p>{this.state.item.price}</p>
                <p>{this.state.item.description}</p>
                <p dangerouslySetInnerHTML={{__html:this.state.item.content}}></p>
                {this.state.item.img_url?<img src={`${api.host}${this.state.item.img_url}`} alt="img" />:''}
            </div>
        );
    }
}

export default ProductContent;