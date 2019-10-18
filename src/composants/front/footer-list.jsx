import React, { Component } from "react";

class FooterList extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.getTitre()}
        {this.getList()}
      </div>
    );
  }
  // condition

  getTitre() {
    if (Object.keys(this.props).length === 0) return "";
    else return <h3>{this.props.titre}</h3>;
  }

  getList() {
    //console.log(Object.keys(this.props).length);
    const test = this.props.hasOwnProperty("liens");

    if (!test) return "";
    else
      return (
        <ul className="list-unstyled">
          {this.props.liens.map(lien => {
            return <li key={lien}>{lien}</li>;
          })}
        </ul>
      );
  }
}

export default FooterList;
