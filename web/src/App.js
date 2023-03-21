import { Routes, Route } from "react-router-dom";
import AdsRoute from "./pages/Ads";
import HomeRoute from "./pages/Home";
import ProductRoute from "./pages/Product";
import RegisterLoginRoute from "./pages/RegisterLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeRoute />} />
      <Route path="/product" element={<ProductRoute />} />
      <Route path="/sign" element={<RegisterLoginRoute />} />
      <Route path="/ads" element={<AdsRoute />} />
    </Routes>
  );
}

export default App;
