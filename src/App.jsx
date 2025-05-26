import AboutUs from "./pages/about/aboutUs";
import ContactUs from "./pages/contact/contactUs";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trainer from "./pages/trainer/trainer";
import Classes from "./pages/classes/classes";
import Schedule from "./pages/schedule/schedule";
import Blog from "./pages/blog/blog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
