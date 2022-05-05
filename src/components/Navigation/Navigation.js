import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink exact="true" to="/" className={s.NavLink}>
      Home
    </NavLink>

    <NavLink to="/movies" className={s.NavLink}>
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
