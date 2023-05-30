import React from "react";
import MainMenu from "./components/mainMenu";
import { Navigate, Route, Routes } from "react-router-dom";
import Posts from "./components/posts";
import AboutMe from "./components/aboutme";
function App() {
  return (
    <div className="container pt-3">
      <MainMenu />
      <Routes>
        <Route path="*" element={<div>404 not found</div>} />
        <Route path="/" element={<Navigate replace to={"/posts"} />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
