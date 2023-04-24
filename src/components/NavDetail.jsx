import { Link, useNavigate } from "react-router-dom";
import arrow from "../arrow.png";

function NavDetail() {
  const navigate = useNavigate();

  function backMovie() {
    navigate("/movies");
  }

  return (
    <div className="flex flex-col nav-wrapper" style={{ flex: "initial" }}>
      <header className="navbar-home">
        <div className="nav-home content-wrapper-detail justify-between align-center">
          <div className="logo-home-wrapper">
            <Link to="/movies">
              <img
                src={arrow}
                alt=""
                className="logo-detail"
                style={{ width: "40px", cursor: "pointer" }}
                onClick={backMovie}
              />
            </Link>
            <Link to="/">
              <img
                src="https://dev.d24jig8s1lr7n9.amplifyapp.com/img/whitelogo.39850b27.png"
                alt=""
                className="logo-home"
              />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavDetail;
