import React, {useState} from "react";
import { MenuOutlined, UserOutlined, LoginOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, Space, theme } from "antd";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const [collapsed, setCollapsed] = useState(false);
    const handleLogout = () => {
        // Perform any necessary logout logic
        // Navigate to the Login page
        navigate("/login");
      };

    return(
        <Header className="header_sec"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 70,
          padding: 0,
          background: "white",
          boxShadow: "0px 2px 25px #000",
        }}
      >
        <Button
          type="text"
          icon={<MenuOutlined />}
          className="hover-white"
          onClick={() => setCollapsed(!collapsed)}
          style={{
            color: "black",
            fontSize: "16px",
            width: 64,
            height: 64,
            paddingLeft:10
          }}
        />

        <Space>
          <Button
            type="text"
            icon={<UserOutlined />}
            style={{ color: "black", width: 40, height: 64 }}
            className="hover-white"
            onClick={() => {
              // Handle profile button click
            }}
          />

          <Button
            type="text"
            icon={<LoginOutlined />}
            style={{ color: "black", width: 40, height: 64 }}
            onClick={handleLogout}
          />
        </Space>
      </Header>
    )
}

export default Header