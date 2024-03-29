import { useRef } from "react";

import closeIcon from "../../assets/close.png";
import threadsIcon from "../../assets/threads2.png";
import classes from "./CreateThread.module.css";
import Modal from "../UI/Modal";

const CreateThread = (props) => {
  const threadRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    const currentTime = new Date().toISOString();
    const username = localStorage.getItem("username");
    const profile = Math.floor(Math.random() * 6);

    const thread = {
      profile: profile,
      username: username,
      timeAgo: currentTime,
      thread: threadRef.current.value,
    };

    props.onCreateThread(thread);
    props.onClose();
  };

  return (
    <div className={classes.backdrop}>
      <Modal>
        <div className={classes.wrapper}>
          <form onSubmit={submitHandler} className={classes.form}>
            <div onClick={props.onClose} className={classes["close-btn"]}>
              <img src={closeIcon} alt="close-icon" />
            </div>
            <div className={classes["form-header"]}>
              <img src={threadsIcon} alt="threads" /> <h2>Threads</h2>
            </div>
            <textarea
              ref={threadRef}
              minLength="10"
              maxLength="200"
              placeholder="Start a thread..."
              required
            />
            <div className={classes.submit}>
              <button>Post</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CreateThread;
