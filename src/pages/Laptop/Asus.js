import Card from "../../components/Card";
import laptopItems from "../../js/laptop-items";

const Asus = () => {
  let asusInfo = laptopItems.asus;
  return (
    <div className="container my-5">
      <h1 className="display-1">Asus</h1>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        <Card info={asusInfo} />
      </div>
    </div>
  );
};

export default Asus;
