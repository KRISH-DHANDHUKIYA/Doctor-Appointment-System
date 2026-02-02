import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Doctors from "./Pages/Doctors";
import Gallery from "./Pages/Gallery";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Nopage from "./Pages/Nopage";
import Endlayot from "./Layout/Endlayout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Endlayot />} >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes >
    </>
  );
}

export default App