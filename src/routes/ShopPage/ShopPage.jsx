import { useEffect, useState } from "react";
import { fetchProducts } from "../../components/api/api";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function loadProducts() {
      const response = await fetchProducts();
      setProducts(response);
      console.log(response);
    }

    loadProducts();
  }, []);
  return (
    <div>
      <h1>Shopping Page</h1>
    </div>
  )
}

export default ShopPage;