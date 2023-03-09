import "./App.css";
import { Routes, Route } from "react-router-dom";
//components
import Navbar from "./components/Navbar/Navbar";
//pages
import Home from "./pages/Home";
import ProductCard from "./components/ProductCard/ProductCard";
import Desks from "./pages/Desks";
import Chairs from "./pages/Chairs";
import Lamps from "./pages/Lamps";
import Contact from "./pages/Contact";
import { Cart } from "./pages/cart/cart";
import NotFound from "./pages/NotFound";
//context logic
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/desks" element={<Desks />}>
            <Route path=":id" element={<ProductCard />} />
          </Route>
          <Route path="/chairs" element={<Chairs />}>
            <Route path=":id" element={<ProductCard />} />
          </Route>
          <Route path="/lamps" element={<Lamps />}>
            <Route path=":id" element={<ProductCard />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
