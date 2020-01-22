import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';

function AppRouter() {
  return (
    <Router>
      <Route
        exact
        path="/"
        component={HomePage}
      />
      <Route
        exact
        path="/projects"
        component={ProjectsPage}
      />
    </Router>
  )
}

export default AppRouter
