import React from "react";
import { Link } from "react-router";

const Navlink = () => {
  return (
    <>
      {/* <h1 className="bg">This is Navlink link to page!!!</h1> */}

      <nav className="bg-amber-200 flex items-center justify-between  px-4 py-4">
        <h1>Logo</h1>
        <Link to="/">Home</Link>
        <Link to="/Contactme">Contact</Link>
        <Link to="/Policy">Policy</Link>
        <Link to="/Term">Term</Link>
      </nav>
    </>
  );
};

export default Navlink;
