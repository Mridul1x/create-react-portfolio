import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
//import Projects from "./components/Projects";
import Upmanager from "./components/Projects/RedWine";
import MyDictionary from "./components/Projects/RainAbstract";
import Home from "./pages";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import MotionReels from "./components/Projects/EternalEmbrace";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="flex  flex-col items-center">
          <div className=" z-40 fixed w-full">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/theredwine" element={<Upmanager />} exact />
            <Route path="/eternalembrace" element={<MotionReels />} exact />
            <Route path="/rainabstract" element={<MyDictionary />} exact />
            <Route path="/aboutme" element={<About />} exact />
          </Routes>
        </div>
        <div className="">
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
