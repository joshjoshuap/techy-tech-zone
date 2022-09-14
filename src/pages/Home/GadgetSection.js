import sampleGadgets from "../../assets/images/sample-gadget.jpg";

const GadgetSection = () => {
  return (
    <div className="py-5">
      <h1 className="display-3">Gadgets</h1>
      <hr className="border border-dark border-3"></hr>
      <div className="row py-5">
        <div className="col">
          <img
            className="img-fluid rounded-2"
            src={sampleGadgets}
            alt="Laptop Iamge"
          ></img>
        </div>
        <div className="col px-5">
          <h1 className="mb-4 text-decoration-underline">Lenovo abcd123</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            gravida sem condimentum turpis fermentum.
          </p>
          <h4>Specifications</h4>
          <ul className="lh-lg">
            <li>adipiscing elit. Nulla gravida sem condimentum turpis</li>
            <li>adipiscing elit. Nulla gravida sem condimentum turpis</li>
            <li>adipiscing elit. Nulla gravida sem condimentum turpis</li>
            <li>adipiscing elit. Nulla gravida sem condimentum turpis</li>
            <li>adipiscing elit. Nulla gravida sem condimentum turpis</li>
            <li>adipiscing elit. Nulla gravida sem condimentum turpis</li>
          </ul>
        </div>
      </div>

      <div className="row py-5">
        <div className="col px-5">
          <h1 className="mb-4 text-decoration-underline">Lenovo abcd123</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            gravida sem condimentum turpis fermentum.
          </p>
          <h4>Specifications</h4>
          <ul className="lh-lg">
            <li>adipiscing elit. Nulla gravida sem condimentum turpis</li>
            <li>adipiscing elit. Nulla gravida sem condimentum turpis</li>
            <li>adipiscing elit. Nulla gravida sem condimentum turpis</li>
            <li>adipiscing elit. Nulla gravida sem condimentum turpis</li>
            <li>adipiscing elit. Nulla gravida sem condimentum turpis</li>
            <li>adipiscing elit. Nulla gravida sem condimentum turpis</li>
          </ul>
        </div>
        <div className="col">
          <img
            className="img-fluid rounded-2"
            src={sampleGadgets}
            alt="Laptop Iamge"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default GadgetSection;
