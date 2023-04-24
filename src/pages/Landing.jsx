import { useNavigate } from "react-router-dom";
import awardsImg from "../awards-img.svg";
import "../components/Landing.css";
import Nav from "../components/Nav";
import { useState } from "react";
import { Ring } from "@uiball/loaders";

function Landing({ landingSearch}) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function loadingSearch() {
    setLoading(true);
    setTimeout(() => {
      navigate("/movies");
    }, 500);
  }

  function landingKey(key) {
    if (key === "Enter") {
      loadingSearch();
    }
  }


  return (
    <>
      <Nav />
      <section id="landing-page">
        <div className="content-wrapper flex-col align-center">
          <div className=" text-content flex flex-col align-center">
            <div style={{ width: "100%" }}>
              <div style={{ width: "100%" }}>
                <h1> Most awarded movie library platform</h1>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <div style={{ width: "100%" }}>
                <h2 style={{color: 'black'}}>
                  FIND YOUR DREAM CAR WITH{" "}
                  <span style={{ color: "rgb(96, 48, 177" }}>BLINKER</span>
                </h2>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <div style={{ width: "100%" }}>
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="Search by Name and find the best..."
                    onChange={(event) => landingSearch(event.target.value)}
                    onKeyPress={(event) => landingKey(event.key)}
                  />
                  {loading ? (
                    <button style={{ border: "none" }} className="loading">
                      <Ring className="loading-icon" size={40} lineWeight={5} speed={2} color="white" />
                    </button>
                  ) : (
                    <button style={{ border: "none" }} onClick={loadingSearch}>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="search"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-search fa-w-16"
                      >
                        <path
                          fill="currentColor"
                          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                        ></path>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <img className="award" src={awardsImg} alt="" />
          <ul>
          <li>Blinker © 2023</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
          <li>Terms of Service</li>
          <li>Privacy and Legal</li>
        </ul>
        </div>
      </section>
    </>
  );
}

export default Landing;
