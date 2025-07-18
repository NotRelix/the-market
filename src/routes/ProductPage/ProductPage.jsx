import { useEffect, useRef, useState } from "react";
import {
  Link,
  useLocation,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { fetchSingleProduct } from "../../components/api/api";
import Loading from "../../components/Loading/Loading";
import styles from "./ProductPage.module.css";
import StarRatings from "react-star-ratings";
import ScrollToTop from "../../components/ScrollToTop";
import CounterInput from "../../components/CounterInput/CounterInput";

const ProductPage = () => {
  const { productId } = useParams();
  const { loading, setLoading, handleAddToCart } = useOutletContext();
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);

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

  if (loading) return <Loading />;

  return (
    <section className={styles.container}>
      <ScrollToTop />
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className={styles.textArea}>
          <h1>{product.title}</h1>
          <div className={styles.rating}>
            <StarRatings
              className={styles.star}
              rating={product.rating.rate}
              starRatedColor={"rgb(255, 196, 0)"}
              starDimension={"20px"}
              starSpacing="0px"
            />
            <span className={styles.rate}>{product.rating.rate}</span>
            <span className={styles.separator}>|</span>
            <span className={styles.count}>
              Ratings: {product.rating.count}
            </span>
          </div>
          <span>Category: {product.category}</span>
          <span className={styles.description}>{product.description}</span>
          <span className={styles.price}>${product.price}</span>
          <span className={styles.quantityText}>Quantity: </span>
          <CounterInput quantity={quantity} setQuantity={setQuantity} />
          <div className={styles.buyButtons}>
            <Link
              to={"/checkout"}
              onClick={() => handleAddToCart(product, product.id, quantity)}
              className={styles.buyNow}
            >
              Buy Now
            </Link>
            <button
              onClick={() => handleAddToCart(product, product.id, quantity)}
              className={styles.addToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
