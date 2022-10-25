import { gadgetBrands } from "../js/image-assets";
import Header from "../components/Header";
import ItemSection from "../components/ItemSection";
import Card from "../components/Card";
import gadgetItems from "../js/gadget-items";

const Gadgets = () => {
  let consoleGamingInfo = gadgetItems.consoleGaming;
  return (
    <>
      <Header
        headerTitle="Gadgets"
        headerSecondaryTitle="Your tech needs for gaming and lifestyle"
        headerDescription=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        gravida sem condimentum turpis convallis fermentum. Vivamus
        placerat, libero sit amet ullamcorper luctus, tellus felis
        mollis purus, vitae rhoncus velit orci nec nibh. Integer
        ultricies dolor sed luctus volutpat. Donec vulputate lacinia
        nisl, eu congue nisi efficitur quis."
        headerImage={gadgetBrands}
      />
      <main className="container py-5" id="main">
        <ItemSection sectionTitle="Gaming Console">
          <Card info={consoleGamingInfo} />
        </ItemSection>
      </main>
    </>
  );
};

export default Gadgets;
