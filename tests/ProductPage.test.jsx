import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { getByDisplayValue, render, screen } from "@testing-library/react";
import ProductPage from "../src/routes/ProductPage/ProductPage";
import { MemoryRouter, Outlet, Routes, Route } from "react-router-dom";

const mockProduct = {
  id: 7,
  title: "7th product",
  image: "https://via.placeholder.com/150",
  price: 109.95,
  description: "A great test product.",
  rating: {
    rate: 5,
    count: 5,
  },
};

const MockLayout = vi.fn(() => {
  const outletContext = {
    loading: false,
    setLoading: () => {},
    addToCart: vi.fn(),
  };

  return (
    <>
      <Outlet context={outletContext} />;
    </>
  );
});

vi.mock("react-star-ratings", () => {
  return {
    default: () => <div>⭐️⭐️⭐️⭐️⭐️</div>,
  };
});

window.scrollTo = vi.fn();

describe("Product Page", () => {
  it("should add product to cart", async () => {
    render(
      <MemoryRouter
        initialEntries={[
          { pathname: "/shop/product/7", state: { product: mockProduct } },
        ]}
      >
        <Routes>
          <Route element={<MockLayout />}>
            <Route
              path="/shop/product/:productId"
              element={<ProductPage />}
            ></Route>
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const user = userEvent.setup();
    const button = await screen.findByRole("button", { name: /add to cart/i });
    await user.click(button);
    expect(MockLayout).toHaveBeenCalled();
  });
});
