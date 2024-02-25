import React from "react";
import { Outlet } from "react-router-dom";
import { Avatar, Space, Layout } from "antd";
import ProjectList from "../project/ProjectList";

const { Header, Footer, Content } = Layout;

const layoutWrapperStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
};

const headerStyle = {
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#fff",
  lineHeight: "64px",
  padding: "65px 20px",
};

const contentStyle = {
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  margin: "10px",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
};

const Portfolio = ({ projects }) => {
  const imageUrl = process.env.REACT_APP_AVATAR_URL;
  return (
    <div>
      <Layout>
        <Header style={headerStyle}>
          <Space size={"middle"}>
            <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} src={imageUrl} alt="avatar photo" />
            <h1>Efe Onoh's Portfolio</h1>
          </Space>
        </Header>
        <Layout>
          <ProjectList projects={projects} />
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Portfolio;
