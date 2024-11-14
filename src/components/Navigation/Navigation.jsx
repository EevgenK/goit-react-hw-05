import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={s.link} to="/">
            home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} to="/movies">
            movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
