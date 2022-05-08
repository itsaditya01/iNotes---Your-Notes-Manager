import React, { useEffect, useState, useContext } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import noteContext from "../../Context/noteContext";
import "./Navbar.style.css";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const context = useContext(noteContext);
  const { user, setSearchedString } = context;
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 40) {
      if (!nav) setNav(true);
    } else {
      if (nav) setNav(false);
    }
  };
  useEffect(() => {
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  window.addEventListener("scroll", handleScroll);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/about");
  };

  const onChange = (e) => {
    setSearchedString(e.target.value);
  };

  let color = nav ? "white" : "black";

  return (
    <div className="main-navbar" style={{ zIndex: 1111, position: "relative" }}>
      <nav
        className="navbar fixed-top navbar-expand-lg"
        style={{
          backgroundColor:
            location.pathname === "/" ? "var(--dark-blue)" : "white",
        }}
      >
        <div className="container">
          <Link
            className="navbar-brand me-auto"
            style={{
              color: location.pathname === "/" ? "white" : "var(--dark-blue)",
            }}
            to="/"
          >
            <h2
              style={{
                color: location.pathname === "/" ? "white" : "var(--dark-blue)",
              }}
            >
              iNotes
            </h2>
          </Link>
          {location.pathname === "/home" ? (
            <div className="d-flex justify-content-lg-end position-relative">
              <div className="search d-flex align-items-center position-relative me-3">
                <input
                  type="text"
                  className="search"
                  onChange={onChange}
                  style={{
                    width: 200,
                    height: 33,
                    borderRadius: 10,
                    backgroundColor: "var(--dark-blue)",
                    paddingLeft: 10,
                    paddingRight: 30,
                    color: "white",
                  }}
                />
                <FaSearch className="magnifying-glass" />
              </div>
              <div className="user d-flex align-items-center">
                <i
                  className="fas fa-user-circle fa-2x "
                  style={{ color: "black" }}
                ></i>
                <div className="menu">
                  <div className="name">{user.name}</div>
                  <div className="email" style={{ color: "white" }}>
                    {user.email}
                  </div>
                  <Link
                    className="logout"
                    onClick={() => handleLogout()}
                    style={{ color: "white" }}
                    to="/"
                  >
                    <i
                      className="fas fa-sign-out-alt"
                      style={{ color: "var(--yellow)" }}
                    ></i>{" "}
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </div>
  );
}
