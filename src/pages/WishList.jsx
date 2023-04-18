import { useContext } from "react";
import { cartContext } from "..";
import { Product } from "../components/Product";
export const MyWishList = () => {
  const { productWishList } = useContext(cartContext);
  return (
    <>
      <h1>My WishList </h1>
      <h3>Items : {productWishList.length}</h3>
      <ul style={{ listStyle: "none" }}>
        {productWishList.map((product, index) => (
          <Product product={product} index={index} isWishList />
        ))}
      </ul>
    </>
  );
};
