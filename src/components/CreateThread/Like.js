import React, { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

import classes from "./Like.module.css";

const Like = () => {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const LikeHandler = () => {
    if (liked) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className={classes["like__activity"]} onClick={LikeHandler}>
      {liked ? <BsHeartFill /> : <BsHeart />}
      <span>{count} likes.</span>
    </div>
  );
};

export default Like;
