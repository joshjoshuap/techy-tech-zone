
const specList = (product) => {
  return <li>{product.specs}</li>;
};

const HomeSection = (props) => {
  return (
    <div className="py-5">
      <h1 className="display-2">{props.sectionTitle}</h1>
      <div className="row py-3">
        <div className="col">
          <img
            className="img-fluid rounded-2"
            src={props.imageProduct1}
            alt="Laptop Iamge"
          ></img>
        </div>
        <div className="col px-5">
          <h1 className="mb-4 text-decoration-underline">
            {props.titleProduct1}
          </h1>
          <p>{props.descProduct1}</p>
          <h4>Specifications</h4>
          <ul className="lh-lg">{props.specsProduct1.map(specList)}</ul>
        </div>
      </div>

      <div className="row py-5">
        <div className="col px-5">
          <h1 className="mb-4 text-decoration-underline">
            {props.titleProduct2}
          </h1>
          <p>{props.descProduct2}</p>
          <h4>Specifications</h4>
          <ul className="lh-lg">{props.specsProduct1.map(specList)}</ul>
        </div>
        <div className="col">
          <img
            className="img-fluid rounded-2"
            src={props.imageProduct1}
            alt="Laptop Iamge"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
