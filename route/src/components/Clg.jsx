import React from "react";
import { Link } from "react-router";

const Clg = () => {
  return (
    <div className="flex justify-between items-center py-2 text-xl font-semibold text-red-500">
      <Link to="/Student">
        <h1 className="cursor-pointer hover:text-red-600 hover:underline">
          Student Details
        </h1>
      </Link>
      <Link to="/Department">
        <h1 className="cursor-pointer hover:text-red-600 hover:underline">
          Department Details
        </h1>
      </Link>
      <Link to="/Faculty">
        <h1 className="cursor-pointer hover:text-red-600 hover:underline">
          Faculty Details
        </h1>
      </Link>
    </div>
  );
};

export default Clg;
