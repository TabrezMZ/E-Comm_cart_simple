import { useParams } from "react-router-dom";
import { Product } from "../components/Product";

export const ProductAbout = ({ products }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === +id);
  return (
    <>
      <h3>Single Product Here</h3>
      <Product product={product} isAbout />
    </>
  );
};
