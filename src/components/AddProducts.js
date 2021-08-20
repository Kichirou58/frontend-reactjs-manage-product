import React, { Component } from 'react';
import axios from 'axios';

const addProductAction = (product_name, product_price, image) => (axios.post('/add', { product_name, product_price, image }).then((resp) => resp.data));


class addProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    

    render() {
        return (
            <div className="container">
                
            </div>
        );
    }
}

export default addProducts;