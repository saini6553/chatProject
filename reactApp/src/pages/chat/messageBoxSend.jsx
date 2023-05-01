import React, { useState } from "react";

const SendMessage = (props) => {
  const [message, setMessage] = useState("");
  const {socket} =  props;

  console.log("===",socket);
  const sendMessagetoServer = () => {
    if (message !== "") {
      //socket.emit("send_message", { username, room, message, __createdtime__ });
      socket.emit('send_message', {
        text: message,
        name: localStorage.getItem('userName'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
     
    }
  };

  return (
    <div
      style={{ position: "fixed", bottom: 15, width: "100%", display: "flex" }}
    >
      <input
        style={{
          width: "60%",
          padding: "12px",
          borderRadius: "6px",
          border: "1px solid rgb(63, 73, 204)",
          fontSize: "0.9rem",
        }}
        placeholder="Message..."
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button className="btn btn-primary" onClick={sendMessagetoServer}>
        Send Message
      </button>
    </div>
  );
};

export default SendMessage;
