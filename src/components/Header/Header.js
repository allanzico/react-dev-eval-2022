import React from "react";
import useStyles from "./useStyles";

const Header = (props) => {
  const classes = useStyles(props);
  return (
    <>
      <header className={classes.Header}>
        <h1>SlapSticker</h1>
        <p>
          Have you ever said something so dumb, you just wanted to slap
          yourself? Well now you can!
        </p>
      </header>
    </>
  );
};

export default Header;
