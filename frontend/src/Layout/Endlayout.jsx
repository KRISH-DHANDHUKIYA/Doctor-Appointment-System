import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import Raw from "../Components/Raw";

const Endlayout = () => {
    return (
        <>
            <Raw />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Endlayout;