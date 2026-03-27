import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";

const MainLayOut = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayOut;
