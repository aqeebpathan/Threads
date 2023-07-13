import React, { Fragment, useState } from "react";

import classes from "./Header.module.css";
import threadsLogo from "../../assets/threads.png";
import createIcon from "../../assets/createIcon.png";
import CreateThread from "../CreateThread/CreateThread";

const Welcome = (props) => {
  return (
    <div className={classes.welcome}>
      <p>Welcome, {props.username}</p>
    </div>
  );
};

const Header = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalhandler = () => {
    setIsModalOpen(false);
  };

  const username = localStorage.getItem("username");
  const capitalizeFirstletter = (username) => {
    return username.charAt(0).toUpperCase() + username.slice(1);
  };
  const formattedUsername = capitalizeFirstletter(username);

  return (
    <Fragment>
      <header className={classes.header}>
        <img src={threadsLogo} alt="threads" />
        <button onClick={openModalHandler}>
          <img src={createIcon} alt="create-icon" />
        </button>
      </header>
      <Welcome username={formattedUsername} />
      {isModalOpen && (
        <CreateThread
          onCreateThread={props.onCreateThread}
          onClose={closeModalhandler}
          onOpen={openModalHandler}
        />
      )}
    </Fragment>
  );
};

export default Header;
