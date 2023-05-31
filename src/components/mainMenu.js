import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div>
      <div className="text-center">
        <h1>MaxDenisenko</h1>
      </div>
      <div className="text-center">
        <h3>MaxDenisenko2013@yandex.ru</h3>
      </div>
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
    </div>
  );
};
export default MainMenu;
