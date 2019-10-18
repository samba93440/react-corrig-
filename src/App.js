import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import NavBar from "./composants/front/navbar";
import Main from "./composants/front/main";
import Footer from "./composants/front/footer";

function App() {
  return (
    <React.Fragment>
      <header>
        <NavBar />
      </header>
      <div className="container">
        <main className="row">
          <Main />
        </main>
        <hr />
        <footer className="row">
          <Footer />
        </footer>
      </div>
    </React.Fragment>
  );
}

export default App;
