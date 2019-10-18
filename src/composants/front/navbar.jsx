import React, { Component } from "react";

class NavBar extends Component {
  state = {};

  style = { display: "flex", justifyContent: "space-between" };

  render() {
    return (
      <div style={this.style}>
        <a className="navbar-brand" href="#">
          Exo1
        </a>
        <div className="navbar navbar-light bg-light navbar-expand">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
