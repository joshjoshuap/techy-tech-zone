import Header from "../components/Header";
import Section from "../components/Section";
import laptopItems from "../js/laptop-items";
import phoneItems from "../js/phone-items";
import tabletItems from "../js/tablet-items";
import gadgetItems from "../js/gadget-items";
import headerImage from "../assets/images/heading-image.jpg";
import sampleLatop from "../assets/images/sample-laptop.jpg";
import samplePhone from "../assets/images/sample-phone.jpg";
import sampleTablet from "../assets/images/sample-tablet.jpg";
import sampleGadget from "../assets/images/sample-gadget.jpg";

const Home = () => {
  let laptopProduct1 = laptopItems[0].lenovoYoga123;
  let laptopProduct2 = laptopItems[0].lenovoLegion5;
  let phoneProduct1 = phoneItems[0].iphone14Pro;
  let phoneProduct2 = phoneItems[0].samsungS21;
  let tabletProduct1 = tabletItems[0].samsungTabS8;
  let tabletProduct2 = tabletItems[0].realmePad;
  let gadgetProduct1 = gadgetItems[0].playstation5;
  let gadgetProduct2 = gadgetItems[0].samsungGalaxyWatch4;
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
      <main className="container" id="main">
        {/* Laptops Section*/}
        <Section
          sectionTitle="Laptops"
          titleProduct1={laptopProduct1.title}
          imageProduct1={sampleLatop}
          descProduct1={laptopProduct1.description}
          specsProduct1={laptopProduct1.specs}
          titleProduct2={laptopProduct2.title}
          imageProduct2={sampleLatop}
          descProduct2={laptopProduct2.description}
          specsProduct2={laptopProduct2.specs}
        />

        {/* Phone Section */}
        <Section
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
        <Section
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
        <Section
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
