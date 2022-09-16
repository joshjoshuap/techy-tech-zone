import Card from "../../components/Card";
import laptopItems from "../../js/laptop-items";

const Dell = () => {
  let dellInfo = laptopItems.dell;
  return (
    <div className="container my-5">
      <h1 className="display-1">Dell</h1>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        <Card info={dellInfo} />
      </div>
    </div>
  );
};

export default Dell;
