import { Product } from "../components/Product";

export const ProductsList = ({
  products,
  isLoading,
  isError,
  errorMessage
}) => {
  return (
    <>
      <h1>Products Listing Page</h1>
      {isError && <h3>{errorMessage}</h3>}
      {!isLoading ? (
        <ul style={{ listStyle: "none" }}>
          {products?.map((product) => (
            <Product product={product} />
          ))}
        </ul>
      ) : (
        <h4>Loading ...</h4>
      )}
    </>
  );
};
