import {
  render,
  screen,
  getAllByTestId,
  findAllByTestId,
} from "@testing-library/react";
import ProductList from "./index";
import { mockProductList } from "../../data/mockProductList";

describe("Product list", () => {
  it("should render product list", () => {
    render(
      <ProductList
        productList={mockProductList}
        numOfCols={4}
        search=""
        isPending={false}
      />
    );
    const listOfProducts = screen.getAllByTestId("product");
    expect(listOfProducts.length).toBe(3);
  });
});
