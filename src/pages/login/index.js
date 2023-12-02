import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./index.css";
import { useDispatch } from "react-redux";
import { Sign } from "../../store/expanceslice";

const Login = () => {
  const dispatch = useDispatch()
  const onFinish = (values) => {
    const login = JSON.parse(localStorage.getItem("Signin"));
    console.log(login, "login");
    console.log(values, "values");

    if (login) {
      if (login.username === values.username && login.password === values.password) {
        dispatch(Sign(login))

      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("User not Found");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form className="form-login"
      name="basic"
      labelCol={{
        span: 8,
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
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h1 className="login-h1">Log in</h1>
      <Form.Item
        label="Email"
        name="Email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
            type:"email"
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Login;
