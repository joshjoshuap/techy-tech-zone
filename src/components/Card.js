const Card = (props) => {
  const cardStyle = {
    width: "18rem",
  };

  return (
    <div class="card" style={cardStyle}>
      <img src={props.cardImage} class="card-img-top" alt="Laptop" />
      <div class="card-body">
        <h5 class="card-title">{props.cardTitle}</h5>
        <p class="card-text">{props.cardDescription}</p>
        <a href="/" className="btn btn-primary">
          View Specs
        </a>
      </div>
    </div>
  );
};

export default Card;
