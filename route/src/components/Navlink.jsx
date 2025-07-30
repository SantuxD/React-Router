import React from "react";
import { Link } from "react-router";

const Navlink = () => {
  return (
    <>
      <h1>This is Navlink link to page!!!</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Contactme">Contact</Link>
        <Link to="/Policy">Policy</Link>
        <Link to="/Term">Term</Link>
      </nav>
    </>
  );
};

export default Navlink;
