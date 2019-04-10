import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Phones from "./components/Phones/Phones";
import { Route } from "react-router-dom";
import Phone from "./components/Phone/Phone";
import Basket from "./components/Basket/Basket";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Layout} />
        <Route path="/shop" component={Phones} />
        <Route path="/phone/:id" component={Phone} />
        <Route path="/categories/:id" component={Layout} />
        <Route path="/basket" component={Basket} />
      </>
    );
  }
}

export default App;
