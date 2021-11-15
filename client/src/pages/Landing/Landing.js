import React from "react";

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Landing</h1>

      <Link to="/home">Home</Link>
    </div>
  );
};

export default Landing;
