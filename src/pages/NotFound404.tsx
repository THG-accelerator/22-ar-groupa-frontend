import React from "react";
import { NavLink } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div>
      <h2>404. Page not found!</h2>
      <p>
        Go to the <NavLink to="/">Homepage</NavLink>.
      </p>
    </div>
  );
};

export default NotFound404;
