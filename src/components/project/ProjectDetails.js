import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'antd';

const ProjectDetails = ({ projects }) => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  return (
    <Card title={project.title}>
      <p>{project.description}</p>
      <iframe src={project.url} width="100%" height="575" title={project.title}></iframe>
    </Card>
  );
};

export default ProjectDetails;