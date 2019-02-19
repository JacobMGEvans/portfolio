import React from "react";
import { Link } from "@reach/router";
import { Button } from "@material-ui/core";
import styles from "./style";

const { root, textStyle, banner } = styles;
const Header = () => (
  <header style={{ border: `.2vw solid red`, ...banner }}>
    <nav>
      <Link to="/" style={{ ...textStyle }}>
        <Button
          variant="contained"
          style={{
            ...root,
          }}
        >
          Home
        </Button>
      </Link>
      <Link to="/about" style={{ ...textStyle }}>
        <Button
          variant="contained"
          style={{
            ...root,
          }}
        >
          About
        </Button>
      </Link>
    </nav>
  </header>
);

export default Header;
