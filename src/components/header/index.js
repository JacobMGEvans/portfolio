import React from "react";
import { Link } from "@reach/router";

const Header = () => (
  <header>
    <nav>
      <Link to="/about"> About </Link>
      <Link to="/"> Home </Link>
    </nav>
  </header>
);

export default Header;
