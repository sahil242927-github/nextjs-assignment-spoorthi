export const productList = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products?limit=40&&_start=30"
  );
  return await response.json();
};
