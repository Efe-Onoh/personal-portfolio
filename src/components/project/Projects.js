import React from 'react';
import { Outlet } from 'react-router-dom';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';

const Projects = ({ projects }) => {
  return (
    <>
        <ProjectDetails projects={projects} />
        <Outlet />  
    </>
  );
};

export default Projects;