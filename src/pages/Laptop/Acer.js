import Card from "../../components/Card";
import laptopItems from "../../js/laptop-items";

const Acer = () => {
  let acerInfo = laptopItems.acer;
  return (
    <div className="container my-5">
      <h1 className="display-1">Acer</h1>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        <Card info={acerInfo} />
      </div>
    </div>
  );
};

export default Acer;
