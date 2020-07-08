import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div
        className="nav-wrapper"
        style={{
          textAlign: "center",
          paddingRight: "11em",
        }}
      >
        <a href="#!" className="brand-logo">
          <i className="large material-icons">cloud</i>
          WEATHER
        </a>
      </div>
    </nav>
    /*     <nav className="align-center">
      <h1>
        <i className="fas fa-cloud m" />
        Weather App
      </h1>
    </nav> */
  );
};

export default Navbar;
