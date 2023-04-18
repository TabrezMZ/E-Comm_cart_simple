import { useContext } from "react";
import { cartContext } from "..";
import { Product } from "../components/Product";

export const MyCart = () => {
  const { productCart } = useContext(cartContext);
  // console.log(productCart);
  return (
    <>
      <h1>My Cart </h1>
      {productCart.length === 0 && <h4>Why you don't buy any products</h4>}
      {productCart.length !== 0 && (
        <div>
          <h3>
            Total Price : ${" "}
            {productCart.reduce((total, { price }) => total + price, 0)}
          </h3>
          <h3>Items : {productCart.length}</h3>
          <ul style={{ listStyle: "none" }}>
            {productCart.map((product, index) => (
              <Product product={product} index={index} isFlag />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
