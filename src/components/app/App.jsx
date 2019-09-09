import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StateProvider } from "../../contexts/Context.jsx";
import Navbar from "../layouts/Navbar.jsx";
import Home from "../home/Home.jsx";
import Team from "../team/Team.jsx";
import News from "../news/News.jsx";
import NewsPost from "../news/list/NewsPost.jsx";
import Contact from "../contact/Contact.jsx";
import InvalidRoute from "../layouts/InvalidRoute.jsx";

import "./App.css";

const App = () => {
  const initialState = { message: "", news: { data: [], hasLoaded: false } };
  const reducer = (state, action) => {
    switch (action.type) {
      case "setNewsData":
        return {
          ...state,
          news: { data: action.data, hasLoaded: true }
        };
      case "fetchState":
        return state;
      default:
        return state;
    }
  };
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/team" component={Team} />
          <Route exact path="/news/:post_id" component={NewsPost} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
          <Route component={InvalidRoute} />
          </Switch>
        </Router>
      </div>
    </StateProvider>
  );
};

export default App;
