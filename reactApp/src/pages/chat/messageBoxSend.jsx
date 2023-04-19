import React, { useState } from "react";

const SendMessage = ({ socket, username, room }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message !== "") {
      const __createdtime__ = Date.now();
      socket.emit("send_message", { username, room, message, __createdtime__ });
      setMessage("");
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
      <button className="btn btn-primary" onClick={sendMessage}>
        Send Message
      </button>
    </div>
  );
};

export default SendMessage;
