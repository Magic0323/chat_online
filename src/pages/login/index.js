import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { post } from "../../utils/http.js";
import "./style.min.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()

  const onFinish = (values) => {
    console.log("Success:", values);
    postLogin(values)
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const postLogin = (userInfo) => {
    post("/login", userInfo).then((res) => {
      console.log(res);
      if(res.code === 0){
        navigate('/home',{state:userInfo})
      }
    });
  };

  return (
    <div className="login-form">
      <h1>Login chat_online</h1>
      <Form
        name="basic"
        labelAlign="left"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="pwd"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

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
    </div>
  );
};
export default Login;
