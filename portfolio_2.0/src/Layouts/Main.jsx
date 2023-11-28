import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar/Navbar";
import { Home } from "../Components/Home/Home";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;