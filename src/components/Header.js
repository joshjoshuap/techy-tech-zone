const Header = (props) => {
  return (
    <header className="bg-dark text-light py-5">
      <div className="container">
        <div className="row gap-1">
          <div className="col w-25">
            <h1 className="display-1">{props.headerTitle}</h1>
            <h3 className="fs-3 ps-3 my-3">{props.headerSecondaryTitle}</h3>
            <p className="fs-5 ps-3 pe-5 mt-5">{props.headerDescription}</p>
          </div>

          <div className="col">
            <img
              className="img-fluid w-full rounded-3"
              src={props.headerImage}
              alt="gadgets pictures"
            ></img>
          </div>
        </div>

        <div className="ps-3">
          <a
            className="btn btn-outline-light fs-5 fw-semibold py-2 px-5"
            href="#main"
          >
            Browse
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
