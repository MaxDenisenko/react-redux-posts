import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" to={"/posts"}>
            Посты
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/aboutme"}>
            Обо мне
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default MainMenu;
