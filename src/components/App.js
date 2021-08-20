import React, { Component } from 'react';
import './App.css';
import HeadTitle from './HeadTitle';
import Product from './Product';
// import dataProducts from 'http://localhost:4000/getdata01'
import axios from 'axios';

const getProductData = () => axios.get('/getdata01').then((res) => res.data);
const addProductAction = (product_name, product_price, image) => (axios.post('/add', { product_name, product_price, image }).then((resp) => resp.data));


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      product_name: '',
      product_price: '',
      image: ''
    }
  }

  //Chạy trước render
  componentWillMount() {
    if (this.state.data === null) {
      getProductData().then((res) => {
        this.setState({
          data: res
        })
      })
    }
  }

  printData = () => {
    if (this.state.data !== null) {
      return this.state.data.map((value, key) => {
        return (<Product
          key={key}
          product_name={value.product_name}
          product_price={value.product_price}
          image={value.image}
        />)
      })
    }
  }

  isChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    var { product_name, product_price, image } = this.state;
    var dataTemp = [];
    dataTemp = this.state.data;

    var item = {};
    item.product_name = product_name;
    item.product_price = product_price;
    item.image = image;

    if (item.product_name !== '') {
      dataTemp.push(item);
      this.setState({
        data: dataTemp
      })
    }

    addProductAction(product_name, product_price, image).then((response) => {
      console.log(response);
    });

  }

  render() {
    console.log(this.state.data);
    return (
      <div >
        <HeadTitle />
        <div className="contaner-fluid">
          <div className="row">
            <div className="col">
              <div className="row">
                {this.printData()}
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-8 mx-auto">
                  <form>
                    <div className="form-group">
                      <label htmlFor="product_name">Tên sản phẩm</label>
                      <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="product_name" id="product_name" aria-describedby="name_text" placeholder="Nhập tên sản phẩm" />
                      <small id="name_text" className="form-text text-muted">Nhập tên zô</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="product_price">Giá sản phẩm</label>
                      <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="product_price" id="product_price" aria-describedby="name_text" placeholder="Nhập giá sản phẩm" />
                      <small id="name_text" className="form-text text-muted">Nhập giá zô</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="image">Ảnh sản phẩm</label>
                      <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="image" id="image" aria-describedby="name_text" placeholder="Nhập ảnh sản phẩm" />
                      <small id="name_text" className="form-text text-muted">Nhập link ảnh zô</small>
                    </div>
                    <button type="reset" onClick={(event) => this.handleClick(event)} className="btn btn-info btn-block">Thêm mới</button>
                  </form>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  }
}

export default App;

