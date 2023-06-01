import React from "react";
import MainMenu from "./components/mainMenu";
import { Navigate, Route, Routes } from "react-router-dom";
import Posts from "./components/posts";
import AboutMe from "./components/aboutme";
import Profile from "./components/profile";
function App() {
  return (
    <div>
      <MainMenu />
      <div className="container pt-5">
        <Routes>
          <Route path="*" element={<div>404 not found</div>} />
          <Route path="/" element={<Navigate replace to={"/posts"} />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
