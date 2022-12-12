import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
//import Projects from "./components/Projects";
import Project01 from "./components/Projects/Project01";
import Home from "./pages";
function App() {
  return (
    <Router>
      <div className="flex  flex-col items-center">
        <div className="pt-6 z-40 fixed w-4/6">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/project01" element={<Project01 />} exact />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
