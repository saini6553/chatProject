import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const UserList = (props)=>{
    const [userList, setUserlist] = useState([]);
    const socket = props.socket

    const navigate = useNavigate();

    function registrationPage(){
      navigate("/", { replace: true });
    }

    useEffect(() => {
      socket.on("savedUser", (data) => {
        debugger
        // const newState =data.map(obj => {
        //   return obj;
        // })
        setUserlist(data)
        console.log('=========>>>>>>>>',userList);
      });


      // Remove event listener on component unmount
      //return () => socket.off("receive_message");
            // axios
            //   .get("http://localhost:4000/findUserList")
            //   .then((response) => {
            //     console.log(Date.now(),"=====>>",response.data);
            //     setUserlist(response.data)
            //     //navigate("/chat", { replace: true });
            //   });
      },[socket, userList]);

      function getChatMsg(username){
        socket.emit("getChatMessages", { username });
      }

    return(
        <div style={{width : "30%"}}>
          <button onClick={ registrationPage}> Register User </button>
            <h3> messageList for {localStorage.getItem('userName')}</h3>
            <ul style={{
                listStyle : "none",
                border : "2px solid chartreuse", borderRadius:"20px"
            }}>
            {userList.map((obj)=>{
                return(<li style={{height: "25px"}}>
                    <span style={{border : "2px solid cyan",borderRadius:"10px"}} onClick={()=>{ getChatMsg(obj.name)}}>{obj.name}</span>
                </li>)
            })}
            </ul>
        </div>
    )
}

export default UserList

// https://www.freecodecamp.org/news/build-a-realtime-chat-app-with-react-express-socketio-and-harperdb/

// https://sabe.io/tutorials/how-to-build-real-time-chat-app-node-express-socket-io