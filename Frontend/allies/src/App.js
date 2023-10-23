import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes, createBrowserRouter } from 'react-router-dom';
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";


function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />



        </Routes>
      </Router>

    </div>
  );
}

export default App;
