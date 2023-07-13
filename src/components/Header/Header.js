import React, { Fragment } from "react";

import classes from "./Header.module.css";
import threadsLogo from "../../assets/threads.png";
import createIcon from "../../assets/createIcon.png";

const Welcome = (props) => {
  return (
    <div className={classes.welcome}>
      <p>Welcome, {props.username}</p>
    </div>
  );
};

const Header = () => {
  const username = localStorage.getItem("username");
  const capitalizeFirstletter = (username) => {
    return username.charAt(0).toUpperCase() + username.slice(1);
  };
  const formattedUsername = capitalizeFirstletter(username);

  return (
    <Fragment>
      <header className={classes.header}>
        <img src={threadsLogo} alt="threads" />
        <button>
          <img src={createIcon} alt="create-icon" />
        </button>
      </header>
      <Welcome username={formattedUsername} />
    </Fragment>
  );
};

export default Header;
