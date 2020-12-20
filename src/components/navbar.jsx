import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  render() {
    const { total } = this.props;
    return (
      <nav
        style={{ position: "fixed", width: "100%", zIndex: "100" }}
        className="navbar navbar-light bg-light"
      >
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <div className="float-right">
            <span className="btn btn-danger"> {total} </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
