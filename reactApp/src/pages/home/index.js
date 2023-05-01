import styles from "./style.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ socket }) => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();


  function chatList() {
    socket.emit("saveUser", { user });
    localStorage.setItem('userName', user);
    navigate("/chat", { replace: true });

    // axios
    //   .post("http://localhost:4000/saveUser", {
    //     user: user,
    //   })
    //   .then((response) => {
    //     console.log("response Data ==>>",response.data);
    //     if("saved" === response.data){
    //     navigate("/chat", { replace: true });
    //     }
    //   });
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
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;
