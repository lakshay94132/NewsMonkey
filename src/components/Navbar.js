import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          NewsMonkey
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/Business">
                Business
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Entertainment">
                Entertainment
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/General">
                General
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Sports">
                Sports
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Health">
                Health
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Science">
                Science
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Technology">
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
