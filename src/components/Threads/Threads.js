import classes from "./Threads.module.css";
import NewThread from "../NewThread/NewThread";

const Threads = (props) => {
  return (
    <ul className={classes.threads}>
      {props.threads.map((thread) => (
        <NewThread
          id={thread.id}
          username={thread.username}
          profile={thread.profile}
          timeAgo={thread.timeAgo}
          thread={thread.thread}
        />
      ))}
    </ul>
  );
};

export default Threads;
