import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex flex-col nav-wrapper">
      <header className="navbar-home">
        <div className="nav-home content-wrapper-home justify-between align-center">
          <div className="logo-home">
            <img
              src="https://dev.d24jig8s1lr7n9.amplifyapp.com/img/blinker-icon.4f9b2663.png"
              alt=""
              className="logo-home"
            />
          </div>
          <div className="links-home align-center justify-between">
            <Link
              className="link-home router-link-exact-active router-link-active"
              to="/"
            >
              Home
            </Link>
            <Link to="/movies" className="link-home link-find">
              Find your movie
            </Link>
            <span style={{cursor: 'not-allowed'}}>
              Contact
            </span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;
