//import styles from './styles.module.css';
import { useState, useEffect } from "react";
import UserList from "./userlist";
import Messages from "./messages";

import io from "socket.io-client"; // Add this

const socket = io.connect("http://localhost:4000");

function ChatListMsg(username = "", room = "") {
  const [messagesRecieved, setMessagesReceived] = useState([]);

  //Runs whenever a socket event is recieved from the server

  useEffect(() => {
    //  if (room !== '' && username !== '') {
    socket.emit("join_room", { username, room });
    //}
  });

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      setMessagesReceived((state) => [
        ...state,
        {
          message: data.message,
          username: data.username,
          __createdtime__: data.__createdtime__,
        },
      ]);
    });
    // Remove event listener on component unmount
    return () => socket.off("receive_message");
  }, [messagesRecieved]);

  // dd/mm/yyyy, hh:mm:ss
  // function formatDateFromTimestamp(timestamp) {
  //   const date = new Date(timestamp);
  //   return date.toLocaleString();
  // }

  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        height: "100vh",
        width: "100vw",
      }}
    >
      <UserList message={messagesRecieved} />
      <Messages />
    </div>
  );
}

export default ChatListMsg;

// <div className={styles.messagesColumn}>
// {messagesRecieved.map((msg, i) => (
//   <div className={styles.message} key={i}>
//     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//       <span className={styles.msgMeta}>{msg.username}</span>
//       <span className={styles.msgMeta}>
//         {formatDateFromTimestamp(msg.__createdtime__)}
//       </span>
//     </div>
//     <p className={styles.msgText}>{msg.message}</p>
//     <br />
//   </div>
// ))}
// </div>
