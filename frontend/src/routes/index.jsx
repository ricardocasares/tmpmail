import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Inbox from "./Inbox";
import Message from "./Message";

export default () => (
  <Router>
    <Route path="/" component={Home} exact />
    <Route path="/:inbox" component={Inbox} exact />
    <Route path="/:inbox/messages/:id" component={Message} exact />
  </Router>
);
