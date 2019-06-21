import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Users from "./component/OneUser";
import User from "./component/Users";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Link to="/"> home </Link>
        <Link to="/users"> users </Link>
        <Link to="/user/:name">user </Link>
      </div>
      <div>
        <Route exact path="/" component={home} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/user/:name" component={User} />
        
        
      </div>
    </BrowserRouter>
  );
}

export default App;
