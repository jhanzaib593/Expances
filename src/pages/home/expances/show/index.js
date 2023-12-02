import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { Button, Col, Row } from "antd";
import { deletexp } from "../../../../store/expanceslice";
const Showexp = (prop) => {
  const dispatch = useDispatch();
  const detete = (exp) => {
    dispatch(deletexp(exp));
  };
  const data = useSelector((s) => s.counter.expance);

  return (
    <div>
      {data.map((t) => {
        return (
          <div key={t.id} className="Exp-wapper">
            <Row>
              <Col span={18}>
                <p><span className="text">Title: </span>{t.title}</p>
                <p><span className="text">Description: </span>{t.description}</p>
                <p><span className="text">Amount: </span>{t.amount}</p>
              </Col>
              <Col span={6} className="Exp-col">
                <Button
                  onClick={() => {
                    prop.editexp(t);
                  }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    detete(t.id);
                  }}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
};
export default Showexp;
