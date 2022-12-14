import { tabletBrands } from "../js/image-assets";
import Header from "../components/Header";
import ItemSection from "../components/ItemSection";
import Card from "../components/Card";
import tabletItems from "../js/tablet-items";

const Tablet = () => {
  let ipadInfo = tabletItems.ipad;
  let samsungInfo = tabletItems.samsung;
  let huaweiInfo = tabletItems.huawei;

  return (
    <>
      <Header
        headerTitle="Tablet"
        headerSecondaryTitle="Your tech needs for watching movies and series"
        headerDescription=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        gravida sem condimentum turpis convallis fermentum. Vivamus
        placerat, libero sit amet ullamcorper luctus, tellus felis
        mollis purus, vitae rhoncus velit orci nec nibh. Integer
        ultricies dolor sed luctus volutpat. Donec vulputate lacinia
        nisl, eu congue nisi efficitur quis."
        headerImage={tabletBrands}
      />
      <main className="container py-5" id="main">
        <ItemSection sectionTitle="IPad">
          <Card info={ipadInfo} />
        </ItemSection>
        <ItemSection sectionTitle="Samsung">
          <Card info={samsungInfo} />
        </ItemSection>
        <ItemSection sectionTitle="Huawei">
          <Card info={huaweiInfo} />
        </ItemSection>
      </main>
    </>
  );
};

export default Tablet;
