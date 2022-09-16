import Card from "../../components/Card";
import laptopItems from "../../js/laptop-items";

const HP = () => {
  let hpInfo = laptopItems.hp;
  return (
    <div className="container my-5">
      <h1 className="display-1">HP</h1>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        <Card info={hpInfo} />
      </div>
    </div>
  );
};

export default HP;
