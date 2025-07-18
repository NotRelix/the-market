import { describe, it, vi } from "vitest";
import Navbar from "../src/components/Navbar/Navbar";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import ProductPage from "../src/routes/ProductPage/ProductPage";

const MockLayout = vi.fn(() => {
  const navbarContext = {
    cart: [],
    editCart: vi.fn(),
    deleteProduct: vi.fn(),
  };

  const outletContext = {
    loading: false,
    setLoading: () => {},
    addToCart: vi.fn(),
  };

  return (
    <>
      <Navbar
        cart={navbarContext.cart}
        editCart={navbarContext.editCart}
        deleteProduct={navbarContext.deleteProduct}
      />
      <Outlet context={outletContext} />
    </>
  );
});

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

const mockCart = [
  {
    product: {
      id: 1,
      title: "7th product",
      image: "https://via.placeholder.com/150",
      price: 109.95,
      description: "A great test product.",
      rating: {
        rate: 5,
        count: 5,
      },
    },
    quantity: 1,
  },
];

const mockEditCart = vi.fn();
const mockDeleteProduct = vi.fn();

vi.mock("react-star-ratings", () => {
  return {
    default: () => <div>⭐️⭐️⭐️⭐️⭐️</div>,
  };
});

describe("Shopping Cart Slider", () => {
  it("should render on click", async () => {
    render(
      <MemoryRouter>
        <Navbar
          cart={mockCart}
          editCart={mockEditCart}
          deleteProduct={mockDeleteProduct}
        />
      </MemoryRouter>
    );
    const user = userEvent.setup();
    const cartBtn = screen.getByRole("button", { name: "open cart" });
    await user.click(cartBtn);
    const subtotal = await screen.findByText(
      /shipping and taxes included at checkout/i
    );
    expect(subtotal).toBeVisible();
  });

  it("should render from add to cart", async () => {
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
    const button = await screen.findByRole("button", {name: /add to cart/i})
    await user.click(button);
    const price = await screen.findByText(/109.95/i);
    expect(price).toBeInTheDocument();
  });
});
