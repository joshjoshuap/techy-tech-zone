import { laptopBrands } from "../js/image-assets";
import Header from "../components/Header";
import ItemSection from "../components/ItemSection";
import Card from "../components/Card";
import laptopItems from "../js/laptop-items";

const Laptop = () => {
  let lenovoInfo = laptopItems.lenovo;
  return (
    <>
      <Header
        headerTitle="Laptops"
        headerSecondaryTitle="Your tech needs for productivity and gaming"
        headerDescription=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        gravida sem condimentum turpis convallis fermentum. Vivamus
        placerat, libero sit amet ullamcorper luctus, tellus felis
        mollis purus, vitae rhoncus velit orci nec nibh. Integer
        ultricies dolor sed luctus volutpat. Donec vulputate lacinia
        nisl, eu congue nisi efficitur quis."
        headerImage={laptopBrands}
      />
      <main className="container py-5" id="main">
        <ItemSection sectionTitle="Lenovo">
          <Card info={lenovoInfo} />
        </ItemSection>
        <ItemSection sectionTitle="Acer">
          <Card info={lenovoInfo} />
        </ItemSection>
        <ItemSection sectionTitle="Asus">
          <Card info={lenovoInfo} />
        </ItemSection>
        <ItemSection sectionTitle="Dell">
          <Card info={lenovoInfo} />
        </ItemSection>
        <ItemSection sectionTitle="Hp">
          <Card info={lenovoInfo} />
        </ItemSection>
      </main>
    </>
  );
};

export default Laptop;
