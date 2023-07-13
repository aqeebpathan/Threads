import React, { useRef } from "react";

import classes from "./Login.module.css";
import threads from "../../assets/threads.png";

const Login = (props) => {
  const userRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();

    localStorage.setItem("username", userRef.current.value.toLowerCase());
    props.onLogin();
  };

  // useEffect(() => {}, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.login}>
        <img src={threads} alt="threads" />
        <h2>Threads</h2>
        <form onSubmit={submitHandler}>
          <input
            ref={userRef}
            type="text"
            minLength="3"
            maxLength="14"
            placeholder="Username"
            required
          />
          <button>Get Started</button>
        </form>
        <p>
          The provided name will not be stored anywhere, including a database,
          but only within your own browser.
        </p>
      </div>
    </div>
  );
};

export default Login;
