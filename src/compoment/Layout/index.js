import { Outlet } from "react-router-dom";
import Header from "../Header";
import "./index.css";

const Layout = () => {
  
  return (
    <>
      <Header />
      <div className="Wapper">
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
