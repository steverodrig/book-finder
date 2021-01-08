import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
        <div>
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Wrapper>
        </div>
    </Router>
  );
}


export default App;
