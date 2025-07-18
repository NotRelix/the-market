import { useEffect, useState } from "react";
import { fetchProducts } from "../../components/api/api";
import Loading from "../../components/Loading/Loading";
import { useOutletContext } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from './ShopPage.module.css'
import ScrollToTop from "../../components/ScrollToTop";

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
    return (<Loading />)
  }

  return (
    <section className={styles.shopContainer}>
      <ScrollToTop />
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ShopPage;