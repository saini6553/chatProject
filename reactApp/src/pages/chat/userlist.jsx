import { useState, useEffect } from "react";
import axios from "axios";


const UserList = (props)=>{
    const [userList, setUserlist] = useState([]);

    useEffect(() => {
            
            axios
              .get("http://localhost:4000/findUserList")
              .then((response) => {
                console.log("=====>>",response.data);
                setUserlist(response.data)
                //navigate("/chat", { replace: true });
              });
      });
    


    
    return(
        <div style={{width : "30%"}}>
            <h3> messageList</h3>
            <ul style={{
                listStyle : "none"
            }}>
            {userList.map((obj)=>{
                return(<li>
                    <span >{obj.name}</span>
                </li>)

            })}
            </ul>

        </div>


    )


}

export default UserList

// https://www.freecodecamp.org/news/build-a-realtime-chat-app-with-react-express-socketio-and-harperdb/

// https://sabe.io/tutorials/how-to-build-real-time-chat-app-node-express-socket-io