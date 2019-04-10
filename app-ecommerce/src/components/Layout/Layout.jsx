import React from "react";
import "./Layout.css";
import SideBar from "../SideBar/SideBar";
import Phones from "../Phones/Phones";
import Header from "../Header/Header";

const Layout = props => {
  return (
    <div className="wiew-container">
      <Header />
      <div className="container">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="phones-view">
          <Phones />
        </div>
      </div>
    </div>
  );
};

export default Layout;
