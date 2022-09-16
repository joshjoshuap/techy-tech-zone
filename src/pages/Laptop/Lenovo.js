import Card from "../../components/Card";
import laptopItems from "../../js/laptop-items";

const Lenovo = () => {
  let lenovoInfo = laptopItems.lenovo;
  return (
    <div className="container my-5">
      <h1 className="display-1">Lenovo</h1>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        <Card info={lenovoInfo} />
      </div>
    </div>
  );
};

export default Lenovo;
