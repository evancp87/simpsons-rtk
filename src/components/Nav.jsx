import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <header className="simpsons-header"></header>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link to="/">Simpsons</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Nav;
