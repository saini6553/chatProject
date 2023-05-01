import { useEffect } from "react";
import UserList from "./userlist";
import Messages from "./messages";


function ChatListMsg({ socket }) {

  // const [messagesRecieved, setMessagesReceived] = useState([]);
//  ///////////
//  useEffect(() => {
//   socket.on('messageResponse', (data) => setMessagesReceived([...messages, data]));
// }, [socket, messagesRecieved]);
//  //////////

  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     console.log(data,messagesRecieved);
  //     setMessagesReceived((state) => [
  //       ...state,
  //       {
  //         message: data.message,
  //         username: data.username,
  //         __createdtime__: data.__createdtime__,
  //       },
  //     ]);
  //   });
  //   return () => socket.off("receive_message");
  // });

  useEffect(() => {
   
  });
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        height: "100vh",
        width: "100vw",
      }}
    >
      <UserList socket={socket} />
      <Messages socket={socket} />
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
