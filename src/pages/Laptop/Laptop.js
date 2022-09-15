import laptopBrands from "../../assets/images/logo/laptop-brands.png";
import Lenovo from "./Lenovo";
import Acer from "./Acer";
import Asus from "./Asus";
import Dell from "./Dell";
import Hp from "./Hp";
import MSI from "./Msi";

const Laptop = () => {
  return (
    <>
      <header className="bg-dark text-light py-5">
        <div className="container">
          <div className="row gap-1">
            <div className="col w-25">
              <h1 className="display-1 ps-3">Laptops</h1>
              <h3 className="fs-3 ps-3 my-3">
                Your tech needs for productivity and gaming
              </h3>
              <p className="fs-5 ps-3 pe-5 mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                gravida sem condimentum turpis convallis fermentum. Vivamus
                placerat, libero sit amet ullamcorper luctus, tellus felis
                mollis purus, vitae rhoncus velit orci nec nibh. Integer
                ultricies dolor sed luctus volutpat. Donec vulputate lacinia
                nisl, eu congue nisi efficitur quis.
              </p>
            </div>

            <div className="col">
              <img
                className="img-fluid w-full rounded-3"
                src={laptopBrands}
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

      <main className="py-5">
        <Lenovo />
        <Acer />
        <Asus />
        <Dell />
        <Hp />
        <MSI />
      </main>
    </>
  );
};

export default Laptop;
