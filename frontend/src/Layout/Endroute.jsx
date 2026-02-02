import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Doctors from "../Pages/Doctors";
import Gallery from "../Pages/Gallery";
import Endlayot from "../Layout/Endlayout";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Nopage from "../Pages/Nopage";
import { Route, Routes } from "react-router-dom";

const Endroute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Endlayot />} />
                <Route index element={<Home />} />
                <Route index element={<About />} />
                <Route index element={<Contact />} />
                <Route index element={<Doctors />} />
                <Route index element={<Gallery />} />
                <Route index element={<Signup />} />
                <Route index element={<Login />} />
                <Route index element={<Nopage />} />
            </Routes >
        </>
    );
}

export default Endroute;