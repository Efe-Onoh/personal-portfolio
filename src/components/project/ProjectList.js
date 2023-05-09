import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const {Sider} = Layout;

const siderStyle = {
  textAlign: 'center',
  color: '#fff'
};

const ProjectList = ({ projects }) => {
  return (

    <Sider
      theme='light'
    >
      <Menu
        mode="inline"
        items={projects.map(
          (project) => ({
            key: project.id,
            label: <Link to={`/projects/${project.id}`}>{project.title}</Link>,
          }),
        )}
      />
    </Sider>

  );
};

export default ProjectList;