import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllPosts from "./AllPosts";
import OnePost from "./OnePost";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={AllPosts} path="/" exact/>
        <Route component={OnePost} path="/:slug"/>
      </div>
    </BrowserRouter>
  );
}

export default App;
