import Header from "./Header";
import GadgetSection from "./GadgetSection";
import LaptopSection from "./LaptopSection";
import PhoneSection from "./PhoneSection";
import TabletSection from "./TabletSection";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container" id="main">
        <LaptopSection />
        <PhoneSection />
        <TabletSection />
        <GadgetSection />
      </main>
    </>
  );
};

export default Home;
