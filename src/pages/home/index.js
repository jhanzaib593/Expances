import { useSelector } from "react-redux";
import Expance from "./expances";
import Login from "../login";

const Home = () => {
  const user = useSelector((s)=>s.counter.user);
  return (
   <div>
    {
    user ? <Expance /> : <Login />
    }
    </div>)
};
export default Home;
