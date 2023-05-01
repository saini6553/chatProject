import Box from './messageBoxSend';
import { useState, useEffect } from "react";

const Messages = (props)=>{
    const [messages, setMessageRecieved ]= useState([])
   const socket = props.socket
    useEffect(() => {
        socket.on("messageResponse", (data) => {
            debugger
            const newState =data.text
            // map(obj => {
            //     return obj.text;
            //   })
          console.log("=========>>>>eceive_message",newState);
          setMessageRecieved((prev)=>[...prev,newState])
        });
        return //() => socket.off("receive_message");
      });

    return(
        <div style={{width : "70%"}}>
            <h3> chat list Message </h3>
            <>{
            messages.map((data) =>
            {
                return <span>{data}</span>
            })
        }</>            
            <Box socket={socket}/>
        </div>
    )
}

export default Messages

//https://www.fullstacklabs.co/blog/chat-application-react-express-socket-io

//https://dev.to/novu/building-a-chat-app-with-socketio-and-react-2edj

