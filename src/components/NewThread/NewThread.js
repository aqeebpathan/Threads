import { useEffect, useState } from "react";

import classes from "./NewThreads.module.css";
import profile from "../../assets/favicon.png";
import Like from "../CreateThread/Like";

import profile1 from "../../assets/green.jpg";
import profile2 from "../../assets/brown.jpg";
import profile3 from "../../assets/pink.jpg";
import profile4 from "../../assets/purple.jpg";
import profile5 from "../../assets/blue.jpg";
import profile6 from "../../assets/yellow.jpg";

const NewThread = (props) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getTimeAgo = (timestamp) => {
    const now = currentTime;
    const secondsElapsed = Math.floor(
      (now - new Date(Date.parse(timestamp))) / 1000
    );

    // Define the time intervals in seconds
    const intervals = [
      { label: "y", seconds: 31536000 },
      { label: "m", seconds: 2592000 },
      { label: "w", seconds: 604800 },
      { label: "d", seconds: 86400 },
      { label: "h", seconds: 3600 },
      { label: "m", seconds: 60 },
    ];

    for (let i = 0; i < intervals.length; i++) {
      const interval = intervals[i];
      const intervalCount = Math.floor(secondsElapsed / interval.seconds);

      if (intervalCount >= 1) {
        return intervalCount === 1
          ? intervalCount + " " + interval.label
          : intervalCount + " " + interval.label;
      }
    }
    return "Just now";
  };

  const username = props.username;
  const profilePicture = [
    profile1,
    profile2,
    profile3,
    profile4,
    profile5,
    profile6,
    profile6,
  ];

  return (
    <li key={props.id} className={classes["new-thread"]}>
      <div className={classes["new-thread__header"]}>
        <div className={classes["new-thread__header-left"]}>
          <img
            src={
              username === "aqeeb"
                ? profile
                : `${profilePicture[props.profile]}`
            }
            alt="threads"
          />
          <p>{props.username}</p>
        </div>
        <p className={classes["new-thread__time-ago"]}>
          {getTimeAgo(props.timeAgo)}
        </p>
      </div>
      <div className={classes["new-thread__container"]}>
        <p className={classes["new-thread__content"]}>{props.thread}</p>
        <div className={classes["new-thread__activity"]}>
          <Like />
        </div>
        <div className={classes["dot"]}></div>
      </div>
    </li>
  );
};

export default NewThread;
