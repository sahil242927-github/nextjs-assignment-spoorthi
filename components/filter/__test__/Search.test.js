import { render, screen, fireEvent } from "@testing-library/react";
import { Search } from "../Search";
import { mockProductList } from "../../../data/mockProductList";

const mockHandleSearch = jest.fn();

describe("Search Box", () => {
  it("Should render input element", () => {
    render(<Search handleSearch={mockHandleSearch} />);

    const searchInput = screen.getByRole("searchbox");
    expect(searchInput).toHaveAccessibleName("Search");
  });

  it("Should be able to type in input", () => {
    render(<Search handleSearch={mockHandleSearch} />);

    const searchInput = screen.getByRole("searchbox");
    fireEvent.change(searchInput, { target: { value: "bag" } });
    expect(searchInput.value).toBe("bag");
  });

  it("Should show filtered products", () => {
    render(<Search handleSearch={mockHandleSearch} />);

    const searchInput = screen.getByRole("searchbox");
    fireEvent.change(searchInput, { target: { value: "mens" } });

    const filteredProducts = mockProductList.filter((product) =>
      product.title.toLowerCase().includes(searchInput.value)
    );

    expect(filteredProducts.length).toBe(4);
  });
});
