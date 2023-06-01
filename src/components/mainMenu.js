import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/mainMenuBurger.css";
import Alert from "./alert";
import { showMenu } from "../redux/actions";
const MainMenu = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.app.alert);
  const menu = useSelector((state) => state.app.menu);
  return (
    <>
      {alert && <Alert msg={alert} />}
      <nav className="nav">
        <div className="burger__btn" onClick={() => dispatch(showMenu(!menu))}>
          <span className="centeral__btn" />
        </div>
      </nav>
      {menu && (
        <div className="blur" onClick={() => dispatch(showMenu(!menu))}>
          <div className="menu__main">
            <div className="menu__content" onClick={(e) => e.stopPropagation()}>
              <ul onClick={() => dispatch(showMenu(!menu))}>
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
        </div>
      )}
    </>

  );
};
export default MainMenu;
