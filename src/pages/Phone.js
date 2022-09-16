import { laptopBrands } from "../js/image-assets";
import Header from "../components/Header";
import ItemSection from "../components/ItemSection";
import Card from "../components/Card";
import phoneItems from "../js/phone-items";

const Phone = () => {
  let iphoneInfo = phoneItems.iphone;
  return (
    <>
      <Header
        headerTitle="Phone"
        headerSecondaryTitle="Your tech needs for social media and personal use"
        headerDescription=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        gravida sem condimentum turpis convallis fermentum. Vivamus
        placerat, libero sit amet ullamcorper luctus, tellus felis
        mollis purus, vitae rhoncus velit orci nec nibh. Integer
        ultricies dolor sed luctus volutpat. Donec vulputate lacinia
        nisl, eu congue nisi efficitur quis."
        headerImage={laptopBrands}
      />
      <main className="container py-5" id="main">
        <ItemSection sectionTitle="IPhone">
          <Card info={iphoneInfo} />
        </ItemSection>
        <ItemSection sectionTitle="Samsung">
          <Card info={iphoneInfo} />
        </ItemSection>
        <ItemSection sectionTitle="Oppo">
          <Card info={iphoneInfo} />
        </ItemSection>
        <ItemSection sectionTitle="Vivo">
          <Card info={iphoneInfo} />
        </ItemSection>
        <ItemSection sectionTitle="Realme">
          <Card info={iphoneInfo} />
        </ItemSection>
      </main>
    </>
  );
};

export default Phone;
