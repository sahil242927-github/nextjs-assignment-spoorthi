import { render, screen, fireEvent } from "@testing-library/react";
import { NoOfColumns } from "../NoOfColumns";

const handleColumns = jest.fn();

describe("NoOfColumns Select Box Filter", () => {
  it("should render NoOfClumn select box filter", () => {
    render(<NoOfColumns handleColumns={handleColumns} />);

    const selectFilter = screen.getByRole("selectBox");
    expect(selectFilter).toBeInTheDocument();
  });

  it("should change product result columns", () => {
    render(<NoOfColumns handleColumns={handleColumns} />);
    const selectFilter = screen.getByRole("selectBox");
    fireEvent.change(selectFilter, { target: { value: 2 } });
    expect(selectFilter.value).toBe("2");
  });
});
