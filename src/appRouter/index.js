import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import page componentes;

import AboutPage from '../components/pagesComponent/AboutPage'

function Index() {
  return <h2>Home</h2>;
}


function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={AboutPage} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;