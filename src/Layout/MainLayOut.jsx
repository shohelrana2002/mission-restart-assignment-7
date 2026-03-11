import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";

const MainLayOut = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayOut;
