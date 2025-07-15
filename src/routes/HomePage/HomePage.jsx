import { useEffect, useState } from "react";
import { fetchProducts } from "../../components/api/api";

const HomePage = () => {
  const [products, setProducts] = useState([]);
    useEffect(() => {
      async function loadProducts() {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
        console.log(fetchedProducts);
      }
      loadProducts();
    }, []);
    
  return (
    <div>Home Page</div>
  )
}

export default HomePage;