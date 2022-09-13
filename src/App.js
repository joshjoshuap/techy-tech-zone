import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Laptop from "./pages/Laptop";
import Phone from "./pages/Phone";
import Tablet from "./pages/Tablet";
import Gadgets from "./pages/Gadgets";

function App() {
  return (
    <Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/tablet" element={<Tablet />} />
        <Route path="/gadgets" element={<Gadgets />} />
      </Routes>
    </Navbar>
  );
}

export default App;
