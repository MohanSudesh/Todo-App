import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Addtodo from "./Addtodo";
import Todolist from "./Todolist";

export class Navigation extends Component {
  render() {
    return (
      <div>
        <nav>
          <BrowserRouter>
            <Link to="/">Tasks</Link>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Link to="/add">Add Task</Link>
            <Route path="/add" exact={true} component={Addtodo} />
            <Route path="/" exact={true} component={Todolist} />
          </BrowserRouter>
        </nav>
      </div>
    );
  }
}

export default Navigation;
