import Constant from "./Constant";
import React from "react";
import "./LoginForm.css";
import { Button, Form, Input } from "antd";
import { UserSwitchOutlined } from '@ant-design/icons';

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => (
  <div className="login_fullscreen_container">
    <div className="centered_container">
      <div className="card">
        <div className="logo_container">
          <img src={Constant.LOGO} alt="Company Logo" className="logo" />
        </div>
        <h4 className="title">Sign In</h4>
        <p className="subtitle">
          Please log in using your username and password!
        </p>

        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="form_item">
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please enter your username!",
                  type:'email'
                },
              ]}
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
              hasFeedback
            >
              <Input placeholder="xyz@clix.capital" />
            </Form.Item>
          </div>

          <div className="form_item">
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your password!",
                },
              ]}
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
              hasFeedback
            >
              <Input.Password placeholder="**********" />
            </Form.Item>
          </div>

          <div className="login_button_container">
            <Form.Item>
              <Button type="primary" shape="round" icon={<UserSwitchOutlined />} block size="large" htmlType="submit" className="login_button">
                Login
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  </div>
);

export default Login;
