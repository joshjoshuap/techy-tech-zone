import { headerImage, sampleTablet, sampleGadget } from "../js/image-assets";
import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import laptopItems from "../js/laptop-items";
import phoneItems from "../js/phone-items";
import tabletItems from "../js/tablet-items";
import gadgetItems from "../js/gadget-items";

const Home = () => {
  let lenovoLegion5Info = laptopItems.lenovo[0];
  let acerNitro5Info = laptopItems.acer[1];
  let iphone14ProInfo = phoneItems.iphone[0];
  let iphone13Info = phoneItems.iphone[1];
  let tabletProduct1 = tabletItems.samsung[0];
  let tabletProduct2 = tabletItems.samsung[1];
  let gadgetProduct1 = gadgetItems.consoleGaming[0];
  let gadgetProduct2 = gadgetItems.consoleGaming[1];
  return (
    <>
      <Header
        headerTitle="Techy Tech Zone"
        headerSecondaryTitle="Web page for your tech needs"
        headerDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        gravida sem condimentum turpis convallis fermentum. Vivamus
        placerat, libero sit amet ullamcorper luctus, tellus felis mollis
        purus, vitae rhoncus velit orci nec nibh. Integer ultricies dolor
        sed luctus volutpat. Donec vulputate lacinia nisl, eu congue nisi
        efficitur quis."
        headerImage={headerImage}
      />
      <main className="container py-5" id="main">
        {/* Laptops Section*/}
        <HomeSection
          sectionTitle="Laptops"
          titleProduct1={lenovoLegion5Info.title}
          imageProduct1={lenovoLegion5Info.image}
          descProduct1={lenovoLegion5Info.description}
          specsProduct1={lenovoLegion5Info.specs}
          titleProduct2={acerNitro5Info.title}
          imageProduct2={acerNitro5Info.image}
          descProduct2={acerNitro5Info.description}
          specsProduct2={acerNitro5Info.specs}
        />

        {/* Phone Section */}
        <HomeSection
          sectionTitle="Mobile Phones"
          titleProduct1={iphone14ProInfo.title}
          imageProduct1={iphone14ProInfo.image}
          descProduct1={iphone14ProInfo.description}
          specsProduct1={iphone14ProInfo.specs}
          titleProduct2={iphone13Info.title}
          imageProduct2={iphone13Info.image}
          descProduct2={iphone13Info.description}
          specsProduct2={iphone13Info.specs}
        />

        {/* Tablet Section */}
        <HomeSection
          sectionTitle="Tablet"
          titleProduct1={tabletProduct1.title}
          imageProduct1={sampleTablet}
          descProduct1={tabletProduct1.description}
          specsProduct1={tabletProduct1.specs}
          titleProduct2={tabletProduct2.title}
          imageProduct2={sampleTablet}
          descProduct2={tabletProduct2.description}
          specsProduct2={tabletProduct2.specs}
        />

        {/* Gadgets Section */}
        <HomeSection
          sectionTitle="Gadgets"
          titleProduct1={gadgetProduct1.title}
          imageProduct1={sampleGadget}
          descProduct1={gadgetProduct1.description}
          specsProduct1={gadgetProduct1.specs}
          titleProduct2={gadgetProduct2.title}
          imageProduct2={sampleGadget}
          descProduct2={gadgetProduct2.description}
          specsProduct2={gadgetProduct2.specs}
        />
      </main>
    </>
  );
};

export default Home;
