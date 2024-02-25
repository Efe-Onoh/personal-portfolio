import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Portfolio from "../components/portfolio/Portfolio";
import Projects from "../components/project/Projects";

export default function IndexRouter({ projects }) {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Portfolio projects={projects} />}>
          <Route index element={<h1>Select a Project</h1>} />
          <Route path="projects/:projectId" element={<Projects projects={projects} />} />
          <Route path="*" element={<>Error: No Page Found</>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
