import React from "react";
import { Link } from "@reach/router";
import { Button } from "@material-ui/core";
import styles from "./style";

const Header = () => {
  const {
    root, textStyle, banner, navContainer, homeButton,
  } = styles;

  return (
    <header style={{ border: `.2vw solid red`, ...banner }}>
      <nav style={{ ...navContainer }}>
        <Link to="/" style={{ ...textStyle }}>
          <Button
            variant="contained"
            style={{
              ...root,
              ...homeButton,
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
};

export default Header;
