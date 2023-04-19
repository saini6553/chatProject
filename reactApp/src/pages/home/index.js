import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import axios from "axios";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  function chatList() {
    axios
      .post("http://localhost:4000/saveUser", {
        user: user,
      })
      .then((response) => {
        console.log(response.data);
        navigate("/chat", { replace: true });
      });
  }
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`Registration Form`}</h1>
        <input
          className={styles.input}
          placeholder="Username..."
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <button className="btn btn-secondary" onClick={chatList}>
          Join Room
        </button>
      </div>
    </div>
  );
};

export default Home;
