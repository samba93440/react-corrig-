import React, { Component } from "react";

class Prix extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h2>{this.props.tutu}</h2>
        </div>
        <div className="card-body">
          <ul className="list-unstyled">
            {this.props.description.map(d => {
              return <li key={d}>{d}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Prix;
