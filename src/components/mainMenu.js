import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Alert from "./alert";

const MainMenu = () => {
  const alert = useSelector((state) => state.app.alert);
  return (
    <div>
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
      {alert && <Alert msg={alert} />}
    </div>
  );
};
export default MainMenu;
