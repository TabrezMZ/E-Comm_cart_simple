import "./styles.css";
import { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { ProductsList } from "./pages/Products";
import { NotFoundPage } from "./pages/NotFound";
import { MyCart } from "./pages/Cart";
import { MyWishList } from "./pages/WishList";
import { ProductAbout } from "./pages/ProductAbout";
import { fakeFetch1 } from "./Api/Api";

const getActiveStyles = ({ isActive }) => ({
  color: isActive && "red",
  fontWeight: isActive && "bold",
  textDecoration: "none",
  margin: "1rem"
});

export default function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getProductsData = async () => {
    setLoading(true);
    try {
      const { status, data } = await fakeFetch1(
        "https://example.com/api/products"
      );
      if (status === 200) {
        setProducts(data.products);
        setLoading(false);
        setError(false);
      }
    } catch (error) {
      console.error(error);
      setError(true);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="App">
      <h6>React Practice set 8 E-Commerce</h6>
      <nav>
        <NavLink to="/" style={getActiveStyles}>
          Home
        </NavLink>
        <NavLink to="/cart" style={getActiveStyles}>
          My Cart
        </NavLink>
        <NavLink to="/wishlist" style={getActiveStyles}>
          My WishList
        </NavLink>
      </nav>
      <Routes>
        {products && (
          <Route
            path="/"
            element={
              <ProductsList
                products={products}
                isLoading={isLoading}
                isError={isError}
                errorMessage={errorMessage}
              />
            }
          />
        )}
        <Route path="/cart" element={<MyCart />} />
        <Route path="/wishlist" element={<MyWishList />} />
        <Route
          path="/product/:id"
          element={<ProductAbout products={products} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
