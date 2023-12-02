import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/expanceslice";

const Header = () => {
  const user = useSelector((s) => s.counter.user);
  const dispatch = useDispatch();

  return (
    <>
      <Row className="header">
        <Col span={10} className="Logo">
          Expances
        </Col>
        <Col span={4} offset={8} className="row-sign">
          {user ? (
            <Button className="button" onClick={() => dispatch(logout())}>
              logout
            </Button>
          ) : (
            <>
              <Link to={"/"}>
                <Button className="button">Login</Button>
              </Link>
              <Link to={"/signin"}>
                <Button className="button">Sign In</Button>
              </Link>
            </>
          )}
        </Col>
      </Row>
    </>
  );
};
export default Header;
