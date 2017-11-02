import React from "react";

const Nav = () =>
  <nav className="w3-sidebar w3-bar-block w3-card w3-animate-left w3-center" id="mySidebar">
    <h1 class="w3-xxxlarge w3-text-theme">Side Navigation</h1>

    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="w3-bar-item w3-button">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="#" class="w3-bar-item w3-button">Link 1</a>
        <a href="/" className="navbar-brand">
          Dynamic Dining
        </a>
      </div>
    </div>
  </nav>;

export default Nav;
