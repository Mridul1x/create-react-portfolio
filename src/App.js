import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
//import Projects from "./components/Projects";
import Upmanager from "./components/Projects/Upmanager";
import Home from "./pages";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="flex  flex-col items-center">
        <div className=" z-40 fixed w-full">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/upmanager" element={<Upmanager />} exact />
          <Route path="/aboutme" element={<About />} exact />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
