const specList = (props) => {
  return <li>{props.specs}</li>;
};

const CardInfo = (props) => {
  const cardStyle = {
    width: "18rem",
  };
  return (
    <div class="d-flex card border-2 border-dark" style={cardStyle}>
      <img
        src={props.image}
        class="card-img-top my-2 w-75 mx-auto"
        alt="Laptop"
      />
      <div class="card-body">
        <h5 class="card-title fs-4 text-center mb-3">{props.title}</h5>
        <p class="card-text">
          <ul>{props.specs.map(specList)}</ul>
        </p>
      </div>
      <div className="text-center mb-3">
        <a
          href={props.link}
          className="btn btn-primary"
          rel="noreferrer"
          target="_blank"
        >
          View More
        </a>
      </div>
    </div>
  );
};

const Card = (props) => {
  let laptopInfo = props.info;

  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      {laptopInfo.map(CardInfo)}
    </div>
  );
};

export default Card;
