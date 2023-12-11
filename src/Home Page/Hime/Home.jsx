import { Outlet } from "react-router-dom";
import HomeNavbar from "../../Component/Navbar/HomeNavbar";

const Home = () => {
  return (
    <div>
      <HomeNavbar />
      <Outlet />
    </div>
  );
};

export default Home;
