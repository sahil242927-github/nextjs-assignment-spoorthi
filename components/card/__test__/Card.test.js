import { render, screen } from "@testing-library/react";
import { Card } from "../Card";

describe("Card", () => {
  it("renders a Product Card", () => {
    render(
      <Card
        title="bag"
        image="/img-not-found.gif"
        link="/product-details/1"
        price={200}
      />
    );

    const price = screen.getByTestId("price");
    const title = screen.getByTestId("title");

    expect(price).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
