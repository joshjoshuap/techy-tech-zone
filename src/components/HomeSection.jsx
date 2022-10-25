const specList = (product) => {
  return <li>{product.specs}</li>;
};

const HomeSection = (props) => {
  return (
    <div className="mb-5">
      <h1 className="display-2">{props.sectionTitle}</h1>
      <div className="row py-3">
        <div className="col-12 col-md align-self-center text-center">
          <img
            className="img-fluid rounded-2 image-responsive"
            src={props.imageProduct1}
            alt="Laptop Iamge"
          ></img>
        </div>
        <div className="col-12 col-lg px-lg-5 mt-4 mt-lg-1">
          <h1 className="mb-2 mb-lg-4 text-decoration-underline text-center">
            {props.titleProduct1}
          </h1>
          <p>{props.descProduct1}</p>
          <h4>Specifications</h4>
          <ul className="lh-lg">{props.specsProduct1.map(specList)}</ul>
        </div>
      </div>
      <div className="row py-3">
        <div className="col-12 col-lg  px-lg-5 mt-4 mt-lg-1 order-2 order-lg-1">
          <h1 className="mb-2 mb-lg-4 text-decoration-underline text-center">
            {props.titleProduct2}
          </h1>
          <p>{props.descProduct2}</p>
          <h4>Specifications</h4>
          <ul className="lh-lg">{props.specsProduct2.map(specList)}</ul>
        </div>
        <div className="col-12 col-lg align-self-center text-center order-1 order-lg-2">
          <img
            className="img-fluid rounded-2 image-responsive"
            src={props.imageProduct2}
            alt="Laptop Iamge"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
