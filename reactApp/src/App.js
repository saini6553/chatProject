import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Chat from "./pages/chat";
import io from "socket.io-client"; // Add this

const socket = io.connect("http://localhost:4000");

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home socket={socket} />} />
          <Route path="/chat" element={<Chat socket={socket} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
