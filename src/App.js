import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Laptop from "./pages/Laptop/Laptop";
import Phone from "./pages/Phone";
import Tablet from "./pages/Tablet";
import Gadgets from "./pages/Gadgets";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/tablet" element={<Tablet />} />
        <Route path="/gadgets" element={<Gadgets />} />
      </Routes>
    </Layout>
  );
}

export default App;
