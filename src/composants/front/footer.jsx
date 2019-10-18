import React, { Component } from "react";
import FooterList from "./footer-list";

class Footer extends Component {
  state = {
    items: [
      { titre: "Caractéristiques", liens: ["lien1", "lien2", "lien3"] },
      { titre: "Ressources", liens: ["lien1", "lien2", "lien3"] },
      { titre: "About", liens: ["lien1", "lien2", "lien3"] }
    ]
  };
  style = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridGap: 20
  };
  render() {
    return (
      <div className="col-sm-12" style={this.style}>
        <div>&nbsp;</div>
        {this.state.items.map(item => {
          return (
            <FooterList
              key={item.titre}
              titre={item.titre}
              liens={item.liens}
            />
          );
        })}
      </div>
    );
  }
}

export default Footer;
