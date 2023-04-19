import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Chat from './pages/chat'

function App() {

 
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Home />} />
		<Route path='/chat' element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
