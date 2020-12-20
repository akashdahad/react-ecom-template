import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import _ from "lodash";

class Product extends Component {
  state = { quant: 0 };
  render() {
    let { title, img, desp, category, price } = this.props;
    if (title.length > 28) {
    }

    title = _.slice(title, 0, 25);
    desp = _.slice(desp, 0, 200);
    return (
      <div className="card">
        <img
          className="card-img p-5"
          src={img}
          style={{ maxHeight: "45vh" }}
        ></img>

        <hr></hr>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          {/* <h6 className="card-subtitle mb-2 text-muted"> Style: VA33TXRJ5</h6> */}
          <p className="card-text">{desp}</p>
          <div className="buy d-flex justify-content-between align-items-center">
            <div className="price text-success">
              <h5 className="mt-4"> ${price}</h5>
            </div>
            {this.state.quant === 0 ? (
              <div
                onClick={this.handleQuant}
                style={{ cursor: "pointer" }}
                className="btn btn-danger mt-3"
              >
                Add to Cart
              </div>
            ) : (
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className={"page-item"}>
                    <span
                      onClick={this.handleQuant}
                      className="page-link"
                      style={{ cursor: "pointer" }}
                    >
                      +
                    </span>
                  </li>
                  <li className={"page-item"}>
                    <span className="page-link" style={{ cursor: "pointer" }}>
                      {this.state.quant}
                    </span>
                  </li>
                  <li className={"page-item"}>
                    <span
                      onClick={this.handleReduce}
                      className="page-link"
                      style={{ cursor: "pointer" }}
                    >
                      -
                    </span>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    );
  }
  handleReduce = () => {
    let quant = this.state.quant;
    this.setState({ quant: quant - 1 });
    console.log(this.state.quant);
  };
  handleQuant = () => {
    let quant = this.state.quant;
    this.setState({ quant: quant + 1 });
    console.log(this.state.quant);
  };
}

export default Product;
