import { useEffect, useState } from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom"
import { fetchSingleProduct } from "../../components/api/api";
import Loading from "../../components/Loading/Loading";
import styles from './ProductPage.module.css'
import StarRatings from "react-star-ratings";

const ProductPage = () => {
  const { productId } = useParams();
  const { loading, setLoading } = useOutletContext();
  const location = useLocation();

  const [product, setProduct] = useState(location.state?.product);
  useEffect(() => {
    async function loadSingleProduct() {
      setLoading(true);
      if (product) {
        setLoading(false);
        return;
      }
      const fetchedProduct = await fetchSingleProduct(productId);
      setProduct(fetchedProduct.products);
      setLoading(false);
    }
    loadSingleProduct();
  }, [productId, product, setLoading]);

  if (loading) return <Loading />

  return (
    <section className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={product.image} alt={product.title} />
        </div>
        <div className={styles.textArea}>
          <h1>{product.title}</h1>
          <div className={styles.rating}>
            <StarRatings
              className={styles.star}
              rating={product.rating.rate}
              starRatedColor={'rgb(255, 196, 0)'}
              starDimension={'20px'}
              starSpacing='0px'
            />
            <span>{product.rating.rate}</span>
            <span>|</span>
            <span>Ratings: {product.rating.count}</span>
          </div>
          <span>Category: {product.category}</span>
          <span>{product.price}</span>
          <span>{product.description}</span>
        </div>
      </div>
    </section>
  )
}

export default ProductPage