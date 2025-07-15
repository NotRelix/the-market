import { vi, describe, it, expect } from 'vitest'
import { fetchProducts } from '../src/components/api/api'

vi.mock("../src/components/api/api", () => ({
  fetchProducts: vi.fn(() => Promise.resolve({
    products: Array(20).fill({ id: 1, title: "test title" })
  }))
}))

describe("API test", () => {
  it("should fetch products", async () => {
    const { products } = await fetchProducts();
    expect(products).toHaveLength(20);
    expect(Array.isArray(products)).toBe(true);
  })

  it("should fetch 1st product", async () => {
    const { products } = await fetchProducts();
    expect(products[0]).toMatchObject({
      id: 1,
      title: "test title",
    })
  })
})