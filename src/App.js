import { useCallback, useEffect, useState } from "react";
import "./App.css";

import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Threads from "./components/Threads/Threads";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [threads, setThreads] = useState([]);
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fetching thread
  const fetchThreadHandler = useCallback(async () => {
    try {
      const response = await fetch(
        "https://thread-0-default-rtdb.firebaseio.com/threads.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedThreads = [];

      for (const key in data) {
        loadedThreads.push({
          id: key,
          profile: data[key].profile,
          username: data[key].username,
          timeAgo: data[key].timeAgo,
          thread: data[key].thread,
        });
      }
      setThreads(loadedThreads);
    } catch (error) {
      alert(error);
    }
  }, []);

  useEffect(() => {
    fetchThreadHandler();
  }, [fetchThreadHandler]);

  // Create new thread
  async function createThreadHandler(thread) {
    const response = await fetch(
      "https://thread-0-default-rtdb.firebaseio.com/threads.json",
      {
        method: "POST",
        body: JSON.stringify(thread),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.json();
    console.log(data);
    fetchThreadHandler();
  }

  /////////////////////////////////////////////////////////////////////////
  const loginHandler = () => {
    setIsLoggedIn(true);
    setUsername(true);
  };

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
    }
    console.log(savedUsername);
  }, []);

  const latestThreads = [...threads].reverse();

  return (
    <div className="App">
      {!isLoggedIn && !username && <Login onLogin={loginHandler} />}
      {username && <Header onCreateThread={createThreadHandler} />}
      {username && <Threads threads={latestThreads} />}
      <Footer />
    </div>
  );
};

export default App;
