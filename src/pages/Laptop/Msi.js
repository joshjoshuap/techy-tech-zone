import laptopSample from "../../assets/images/sample-laptop.jpg";
import Card from "../../components/Card";

const MSI = () => {
  return (
    <div className="container my-5">
      <h1 className="display-1">MSI</h1>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        <Card
          cardTitle="Lenovo 123"
          cardDescription="Lenovo 123 - Some quick example text to build on the card title and make up the
              bulk of the card's content."
          cardImage={laptopSample}
        />

        <Card
          cardTitle="Lenovo 000"
          cardDescription="Lenovo 000 - Some quick example text to build on the card title and make up the
              bulk of the card's content."
          cardImage={laptopSample}
        />

        <Card
          cardTitle="Lenovo abcd"
          cardDescription="Lenovo abcd - Some quick example text to build on the card title and make up the
              bulk of the card's content."
          cardImage={laptopSample}
        />

        <Card
          cardTitle="Lenovo xyz"
          cardDescription="Lenovo xyz - Some quick example text to build on the card title and make up the
              bulk of the card's content."
          cardImage={laptopSample}
        />
      </div>
    </div>
  );
};

export default MSI;
