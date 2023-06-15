
import React, { useState } from "react";
import { Button, Layout, Menu, Space, theme } from "antd";
import { LogoutOutlined, MenuOutlined, WindowsOutlined, FileDoneOutlined, UserOutlined, LoginOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router";
import Constant from "../Login/Constant";
import Login from "../Login";
import DataTables from '../DataTables/Ucic_Master';
import Dashboard from "../Dashboard/index"
import "./Layout.css";


const { Header, Sider, Content, Footer } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Dashboard", "1", <WindowsOutlined />),
    getItem("App Details", "sub1", <FileDoneOutlined />, [
      getItem("UCIC Master", "3"),
      getItem("Application Leads", "4"),
      getItem("Customer", "5"),
      getItem("Address", "5"),
      getItem("Email Master", "5"),
      getItem("Phone Master", "5"),
      getItem("Agreement", "5"),
      getItem("Fin Details", "5"),
      getItem("AGR Charges", "5"),
      getItem("Asset", "5"),
      getItem("Customer Relationship ", "5"),
      getItem("Schedule", "5"),
      getItem("Bucket  ", "5"),
  ]),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any necessary logout logic
    // Navigate to the Login page
    navigate("/login");
  };

  const handleMenuClick = (item) => {
    if (item.key === "3") {
      navigate("/DataTables"); // Redirect to UCIC Master page
    }else if (item.key === "4") {
      navigate("/DataTables"); // Redirect to AppDetail page
    }
  };

   return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" style={{ width: collapsed ? 64 : 200 }}>
        <img src={Constant.LOGO1}

        alt="Company Logo" style={{ width: "70%", height: "auto",paddingLeft:10,paddingTop:10}} />
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} onClick={handleMenuClick} />
      </Sider>
      <Layout>
        <Header className="hader_sec"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 60,
            padding: 0,
            background: "white",
            boxShadow: "4px 4px 4px rgba(4, 0.4, 0.4, 0.6)",
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

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
            <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/datatables" element={<DataTables/>} />

    {/* Add more routes for other pages */}
  </Routes>
</Content>
  <Footer>footer</Footer>
       </Layout>
     </Layout>
  );
};

export default App;
