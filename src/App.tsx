import { Routes, Route, Navigate } from "react-router-dom";
import ProductPageById from "./pages/ProductsPage/ProductPageById/ProductPageById";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import CreateProductPage from "./pages/CreateProductPage/CreateProductPage";
function App() {
  return (
    <Routes>
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductPageById />} />
      <Route path="/create-product" element={<CreateProductPage />} />
      <Route path="*" element={<Navigate to="/products" />} />
    </Routes>
  );
}

export default App;
