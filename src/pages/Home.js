import {
  headerImage,
  sampleLaptop,
  samplePhone,
  sampleTablet,
  sampleGadget,
} from "../js/image-assets";
import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import laptopItems from "../js/laptop-items";
import phoneItems from "../js/phone-items";
import tabletItems from "../js/tablet-items";
import gadgetItems from "../js/gadget-items";

const Home = () => {
  let laptopProduct1 = laptopItems.lenovo[0];
  let laptopProduct2 = laptopItems.lenovo[1];
  let phoneProduct1 = phoneItems.iphone[0];
  let phoneProduct2 = phoneItems.iphone[1];
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
          titleProduct1={laptopProduct1.title}
          imageProduct1={sampleLaptop}
          descProduct1={laptopProduct1.description}
          specsProduct1={laptopProduct1.specs}
          titleProduct2={laptopProduct2.title}
          imageProduct2={sampleLaptop}
          descProduct2={laptopProduct2.description}
          specsProduct2={laptopProduct2.specs}
        />

        {/* Phone Section */}
        <HomeSection
          sectionTitle="Mobile Phones"
          titleProduct1={phoneProduct1.title}
          imageProduct1={samplePhone}
          descProduct1={phoneProduct1.description}
          specsProduct1={phoneProduct1.specs}
          titleProduct2={phoneProduct2.title}
          imageProduct2={samplePhone}
          descProduct2={phoneProduct2.description}
          specsProduct2={phoneProduct2.specs}
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
