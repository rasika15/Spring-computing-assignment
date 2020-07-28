import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import Users from "./Users";
import AddUsers from "./Users/AddUsers";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
            <Route exact path="/add_users">
              <AddUsers />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
