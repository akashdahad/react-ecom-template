import React, { Component } from "react";
import Navbar from "./navbar";
import Product from "./product";
import getData from "../data/fakeStore";

class Page extends Component {
  state = {
    data: getData(),
    total: 0,
  };
  render() {
    return (
      <div>
        <div className="text-center pb-5">
          <Navbar total={this.state.total} />
        </div>
        <div className="container">
          <div className="row">
            {this.state.data.map((d) => (
              <div
                className="col-12 col-sm-8 col-md-6 col-lg-4 mt-2 mb-2"
                key={d.id}
              >
                <Product
                  title={d.title}
                  price={d.price}
                  desp={d.description}
                  img={d.image}
                  category={d.category}
                  tinc={this.handleTotal}
                  trec={this.handleTotalReduce}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  handleTotal = () => {
    let total = this.state.total;
    this.setState({ total: total + 1 });
  };
  handleTotalReduce = () => {
    let total = this.state.total;
    this.setState({ total: total - 1 });
  };
}

export default Page;
