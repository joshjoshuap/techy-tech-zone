import { headerImage } from "../js/image-assets";
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
  let ipadAir2022Info = tabletItems.ipad[0];
  let ipadMiniInfo = tabletItems.ipad[1];
  let playstattion5Info = gadgetItems.consoleGaming[0];
  let xboxSeriesXInfo = gadgetItems.consoleGaming[1];
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
          titleProduct1={ipadAir2022Info.title}
          imageProduct1={ipadAir2022Info.image}
          descProduct1={ipadAir2022Info.description}
          specsProduct1={ipadAir2022Info.specs}
          titleProduct2={ipadMiniInfo.title}
          imageProduct2={ipadMiniInfo.image}
          descProduct2={ipadMiniInfo.description}
          specsProduct2={ipadMiniInfo.specs}
        />

        {/* Gadgets Section */}
        <HomeSection
          sectionTitle="Gadgets"
          titleProduct1={playstattion5Info.title}
          imageProduct1={playstattion5Info.image}
          descProduct1={playstattion5Info.description}
          specsProduct1={playstattion5Info.specs}
          titleProduct2={xboxSeriesXInfo.title}
          imageProduct2={xboxSeriesXInfo.image}
          descProduct2={xboxSeriesXInfo.description}
          specsProduct2={xboxSeriesXInfo.specs}
        />
      </main>
    </>
  );
};

export default Home;
