import { Card } from "../card";

export default function ProductList({
  productList,
  search,
  numOfCols,
  isPending,
}) {
  const noOfColsClass = numOfCols
    ? `sm:grid-cols-${numOfCols} lg:grid-cols-${numOfCols}`
    : `sm:grid-cols-3 lg:grid-cols-4`;

  return (
    <section className="flex justify-center items-center">
      {isPending && <p>Updating list...</p>}
      <div
        data-testid="product-list"
        className={`grid grid-cols-2 ${noOfColsClass} gap-4`}
      >
        {productList
          .filter((product) =>
            search.toLowerCase() === ""
              ? product
              : product.title.toLowerCase().includes(search)
          )
          .map(({ title, image, price, id }) => (
            <Card
              key={id}
              title={title}
              image={image}
              price={price}
              link={`/product-details/${id}`}
            />
          ))}
      </div>
    </section>
  );
}
