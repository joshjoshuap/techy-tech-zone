import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav fs-4 fw-semibold">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/laptop" className="nav-link">
                  Laptop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/phone" className="nav-link">
                  Phone
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tablet" className="nav-link">
                  Tablet
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Gadgets" className="nav-link">
                  Gadgets
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {props.children}
      <footer className="bg-dark text-light text-center p-2">
        Joshua Copyright
      </footer>
    </>
  );
};

export default Navbar;
