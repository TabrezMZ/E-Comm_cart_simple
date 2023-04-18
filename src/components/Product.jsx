import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { cartContext } from "..";

export const Product = ({ product, isFlag, isWishList, isAbout, index }) => {
  const { id, name, description, price, brand, category, quantity } = product;
  const {
    setProductWishListt,
    setProductCart,
    productWishList,
    productCart
  } = useContext(cartContext);
  return (
    <>
      <li className="product" key={id}>
        <h4>Name : {name}</h4>
        <p>{description}</p>
        <p>Price : $ {price}</p>
        {isAbout && (
          <div>
            <p>Category : {category}</p>
            <p>Brand : {brand}</p>
            <p>Quantity : {quantity}</p>
          </div>
        )}
        {(isFlag || isWishList) && (
          <div>
            <p>Quantity : {quantity}</p>
            <p>Category : {category}</p>
            <p>Brand : {brand}</p>
          </div>
        )}
        {!isFlag && !isWishList && (
          <div>
            <button
              className="btn"
              onClick={() => setProductCart([...productCart, product])}
            >
              Add To Cart
            </button>
            <button
              className="btn"
              onClick={() => setProductWishListt([...productWishList, product])}
            >
              Add To wishList
            </button>
            {!isAbout && <NavLink to={`/product/${id}`}>Visit Item</NavLink>}
          </div>
        )}
        {isFlag && (
          <button
            className="btn"
            onClick={() =>
              setProductCart(
                productCart.filter((product, index1) => index1 !== index)
              )
            }
          >
            Remove from Cart
          </button>
        )}
        {isWishList && (
          <button
            className="btn"
            onClick={() =>
              setProductWishListt(
                productWishList.filter((product, index1) => index1 !== index)
              )
            }
          >
            Remove from Wishlist
          </button>
        )}
      </li>
    </>
  );
};
