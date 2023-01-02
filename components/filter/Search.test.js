import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Search } from "./Search";
import { mockProductList } from "../../data/mockProductList";
import Home from "../../pages";

const handleSearch = () => {};

describe("Search Box", () => {
  it("Should check for seachbox", () => {
    render(<Search handleSearch={handleSearch} />);

    const searchInput = screen.getByRole("searchbox");
    expect(searchInput).toHaveAccessibleName("Search");
  });

  /*  it("should show search result when search item is not empty", () => {
    render(<Home ProductList={mockProductList} />);

    const searchbox = screen.getByRole(/Search product/i);
  }); */
});
