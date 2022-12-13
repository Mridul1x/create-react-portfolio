import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
//import Projects from "./components/Projects";
import Upmanager from "./components/Projects/Upmanager";
import Couldbepizza from "./components/Projects/Couldbepizza";
import Home from "./pages";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      {" "}
      <ScrollToTop>
        <div className="flex  flex-col items-center">
          <div className=" z-40 fixed w-full">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/upmanager" element={<Upmanager />} exact />
            <Route path="/couldbepizza" element={<Couldbepizza />} exact />
            <Route path="/aboutme" element={<About />} exact />
          </Routes>
        </div>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
