import laptopBrands from "../assets/images/logo/laptop-brands.png";
import Header from "../components/Header";
import Lenovo from "./Laptop/Lenovo";
import Acer from "./Laptop/Acer";
import Asus from "./Laptop/Asus";
import Dell from "./Laptop/Dell";
import Hp from "./Laptop/Hp";
import MSI from "./Laptop/Msi";

const Laptop = () => {
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
      <main className="py-5" id="main">
        <Lenovo />
        <Acer />
        <Asus />
        <Dell />
        <Hp />
        <MSI />
      </main>
    </>
  );
};

export default Laptop;
