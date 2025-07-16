import { useEffect, useState } from "react";
import { fetchProducts } from "../../components/api/api";
import Loading from "../../components/Loading/Loading";
import { useOutletContext } from "react-router-dom";

const ShopPage = () => {
  const { loading, setLoading } = useOutletContext();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const response = await fetchProducts();
      setProducts(response.products);
      console.log(response.products);
      setLoading(false);
    }

    loadProducts();
  }, [setLoading]);

  if (loading) {
    return(<Loading />)
  }

  return (
    <section>
      {products.map((product) => (
        <div>
          <h1>{product.title}</h1>
        </div>
      ))}
    </section>
  )
}

export default ShopPage;