import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="images/logo.svg" alt="" />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav m-auto gap-5">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            {/* About Dropdown */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </Link>

              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                {/* Temple Submenu */}
                <li className="dropdown-submenu">
                  <Link className="dropdown-item dropdown-toggle" to="#">
                    Temple
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/temple-timings">
                        Temple Timings
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/architect">
                        Architect
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/temple-premises">
                        Temples in Premises
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/important-days">
                        Important Days
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* History Submenu */}
                <li className="dropdown-submenu">
                  <Link className="dropdown-item dropdown-toggle" to="#">
                    History
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/temple-history">
                        Temple History
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="ujjain-history">
                        Ujjain History
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="dropdown-item" to="/trustees">
                    Trustees
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/mahakal-lok">
                    Mahakal Lok
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/annakshetra">
                    Annakshetra
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/pujari">
                    Purohit-Pujari
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/pujan-abhishek">
                    Pujan-Abhishek
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="#">
                Darshan
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="#">
                History
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="#">
                Aarti
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                AI Guide
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link className="live-darshan-btn text-decoration-none" to="/booking">
            Booking
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
