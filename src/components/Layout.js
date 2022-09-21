import { NavLink } from "react-router-dom";

const Layout = (props) => {
  let year = new Date().getFullYear();

  return (
    <>
      <nav className="navbar navbar-dark bg-gray navbar-expand-lg">
        <div className="container">
          <a class="navbar-brand" href="/">
            Techy Techy
          </a>
          <button
            className="navbar-toggler text-right"
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
            <ul className="navbar-nav text-center fs-4 fw-semibold">
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
      <footer className="bg-dark">
        <p>&copy; Copyright {year} </p>
        <p>
          <a
            href="https://joshjoshuap.vercel.app/"
            className="footer-links"
            target="_blank"
            rel="noreferrer"
          >
            Build By: Joshua Pautanes
          </a>
        </p>
      </footer>
    </>
  );
};

export default Layout;
