import React, { useState } from "react";
import { Button, Col, Form, Input, InputNumber, Modal, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Addexp, editExp } from "../../../store/expanceslice";
import Showexp from "./show";
import "./index.css";

const Expence = () => {
  const dispatch = useDispatch();
  const [editExpances, setEditExpances] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const total = useSelector((s) => s.counter.expance);
  const amounts = total.map((t) => {
    return t.amount;
  });
  console.log(amounts, "amounts");

  const Sum = amounts.reduce(sumtotal, 0);

  function sumtotal(total, num) {
    return total + num;
  }
  console.log(Sum, "Sum");

  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (values) => {
    if (editExpances) {
      const update = {
        ...values,
        id: editExpances,
      };
      dispatch(editExp(update));
    } else {
      dispatch(Addexp(values));
    }
    setIsModalOpen(false);
    form.resetFields();
    setEditExpances("");
  };
  //   const onFinishFailed = (errorInfo) => {
  //     console.log("Failed:", errorInfo);
  //   };
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
    setEditExpances("");
  };
  return (
    <div className="main">
      <Row>
        <Col span={8}>
          <Button className="total">Total: {Sum}</Button>
        </Col>
        <Col span={8} offset={8}>
          <Button onClick={showModal}>Add Expence</Button>
        </Col>
      </Row>

      <Showexp
        editexp={(exp) => {
          setEditExpances(exp.id);
          setIsModalOpen(true);
          form.setFieldsValue({
            title: exp.title,
            description: exp.description,
            amount: exp.amount,
          });
        }}
      />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={form.submit}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          form={form}
          onFinish={handleOk}
          autoComplete="off"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input your title!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input your Description!",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Amount"
            name="amount"
            rules={[
              {
                required: true,
                message: "Please input your Description!",
              },
            ]}
          >
            <InputNumber
              style={{
                width: 200,
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>

            <Button type="primary" htmlType="submit">
              {editExpances ? "update" : "Submit"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default Expence;
