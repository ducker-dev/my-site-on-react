import React, { Component } from "react";
import "./Components/common.scss";
import ux from "./Components/ux";

const { Header, Footer } = ux;

class App extends Component {
  render() {
    return (
      <>
        <Header />
        Содержимое
        <Footer />
      </>
    );
  }
}

export default App;
