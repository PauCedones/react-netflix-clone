import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import Movie from "./pages/Movie";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/movies" component={Movies} />
    <Route exact path="/tv" component={TVShows} />
    <Route exact path="/movie/:movie_id" component={Movie} />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
