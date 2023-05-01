const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const d = new Date();

const msgUser = require("./ControllerService");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var userData = {
  msg: "Manish",
  dateStamp: 34,
};

app.use(cors()); // Add cors middleware
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.post("/saveUser", async (req, res) => {
  const obj = req.body;
  try {
    if (!obj.user) {
      throw "Name missing";
    }
    await msgUser.saveUsername(obj);
    res.send("saved").status(200);
  } catch (err) {
    console.info("************************** Error ==>>", err);
    res.send("Wrong");
  }
});
app.get("/findUserList", async (req, res) => {
  res.send(await msgUser.getList());
});

app.post("/saveMsg", async (req, res) => {
  const obj = req.body;
  try {
    await msgUser.saveUsername(obj);
    res.send("saved").status(200);
  } catch (err) {
    console.info("************************** Error ==>>", err);
    res.send("Wrong");
  }
});
app.get("/getUserMsg", async (req, res) => {
  const query = req.query;
  res.send(await msgUser.getList(query));
});

const CHAT_BOT = "ChatBot"; // Add this
// Listen for when the client connects via socket.io-client
io.on("connection", async (socket) => {
  console.log(
    d.toLocaleString(),
    `**************************User connected ${socket.id}`
  );
  socket.on("join_room", (data) => {
    console.log("**************************DATA", data);
    const { username, room } = data; // Data sent from client when join_room event emitted
    socket.join(room); // Join the user to a socket room
    let __createdtime__ = Date.now(); // Current timestamp
    socket.to(room).emit("receive_message", {
      message: `${username} has joined the chat room`,
      username: CHAT_BOT,
      __createdtime__,
    });
  });
 
  socket.on("saveUser", async (data) => {
    const arr = await msgUser.saveUsername(data);
    console.log("**************************DATA", arr);
    io.emit("savedUser", arr);
  });

  socket.on("send_message", (data) => {
    console.log("**************************DATA", data);
    io.emit("messageResponse", data);
  });
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

server.listen(4000, () => console.log("Server is running on port 4000"));
