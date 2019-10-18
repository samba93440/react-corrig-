import React, { Component } from "react";
import Prix from "./prix";

class Main extends Component {
  state = {
    offres: [
      {
        titre: "offre1",
        description: ["item1", "item2", "item3"]
      },
      {
        titre: "offre2",
        description: ["item1", "item2", "item3"]
      },
      {
        titre: "offre3",
        description: ["item1", "item2"]
      }
    ]
  };

  style = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: 20
  };
  render() {
    return (
      <div className="col-sm-12 text-center">
        <h1>Titre principal</h1>
        <div className="row">
          <p className="col-sm-8 offset-md-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            reiciendis tempora quo voluptatem asperiores necessitatibus
            voluptatum mollitia voluptas. Quos provident maiores iure, eius
            nostrum earum esse perferendis nulla eos. Incidunt.
          </p>
        </div>

        <section style={this.style}>
          {this.state.offres.map(offre => (
            <Prix
              key={offre.titre}
              tutu={offre.titre}
              description={offre.description}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Main;
