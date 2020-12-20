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
          <Navbar />
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
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
