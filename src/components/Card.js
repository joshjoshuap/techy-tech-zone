const CardInfo = (props) => {
  const cardStyle = {
    width: "18rem",
  };
  return (
    <div class="card" style={cardStyle}>
      <img src={props.image} class="card-img-top" alt="Laptop" />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.description}</p>
        <a href="/" className="btn btn-primary">
          View Specs
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
