import laptopSample from "../../assets/images/sample-laptop.jpg";

const Dell = () => {
  const cardStyle = {
    width: "18rem",
  };

  return (
    <div className="container my-5">
      <h1 className="display-1">Dell</h1>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        <div class="card" style={cardStyle}>
          <img src={laptopSample} class="card-img-top" alt="Laptop" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-primary">
              View Specs
            </a>
          </div>
        </div>

        <div class="card" style={cardStyle}>
          <img src={laptopSample} class="card-img-top" alt="Laptop" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-primary">
              View Specs
            </a>
          </div>
        </div>

        <div class="card" style={cardStyle}>
          <img src={laptopSample} class="card-img-top" alt="Laptop" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-primary">
              View Specs
            </a>
          </div>
        </div>

        <div class="card" style={cardStyle}>
          <img src={laptopSample} class="card-img-top" alt="Laptop" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-primary">
              View Specs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dell;
