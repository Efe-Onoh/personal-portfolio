import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Portfolio from "../components/portfolio/Portfolio";
import Projects from "../components/project/Projects";

export default function IndexRouter({projects}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio projects={projects}/>}>
          <Route path="projects/:projectId" element={<Projects projects={projects} />} /> 
          <Route path="*" element={<>Error: No Page Found</>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}