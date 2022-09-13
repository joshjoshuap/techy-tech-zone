import headingImage from "../assets/images/heading-image.jpg";

const Header = () => {
  return (
    <header className="bg-dark text-light p-5">
      <div className="container">
        <div className="row gap-1">
          <div className="col w-25">
            <h1 className="display-1">Techy Tech Zone</h1>
            <h3 className="fs-3 ps-3 my-3">Web page for your tech needs</h3>
            <p className="fs-5 ps-3 pe-5 mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              gravida sem condimentum turpis convallis fermentum. Vivamus
              placerat, libero sit amet ullamcorper luctus, tellus felis mollis
              purus, vitae rhoncus velit orci nec nibh. Integer ultricies dolor
              sed luctus volutpat. Donec vulputate lacinia nisl, eu congue nisi
              efficitur quis.
            </p>
          </div>

          <div className="col">
            <img
              className="img-fluid w-full rounded-3"
              src={headingImage}
              alt="gadgets pictures"
            ></img>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
