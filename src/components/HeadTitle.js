import React, { Component } from 'react';

class HeadTitle extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3">Hiển thị sản phẩm</h1>
                    <p className="lead">Sử dụng React JS lấy dữ liệu từ Node JS</p>
                    <hr className="my-2" />
                </div>
            </div>
        );
    }
}

export default HeadTitle;