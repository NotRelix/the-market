import { useEffect, useRef, useState } from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom";
import { fetchSingleProduct } from "../../components/api/api";
import Loading from "../../components/Loading/Loading";
import styles from "./ProductPage.module.css";
import StarRatings from "react-star-ratings";
import ScrollToTop from "../../components/ScrollToTop";
import CounterInput from "../../components/CounterInput/CounterInput";
import SuccessMessage from "../../components/SuccessMessage/SuccessMessage";

const ProductPage = () => {
  const { productId } = useParams();
  const { loading, setLoading, addToCart } = useOutletContext();
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [successMessage, setSuccessMessage] = useState(false);
  const hideTimerRef = useRef(null);

  function handleAddToCart(product, productId, quantity) {
    addToCart(product, productId, quantity);
    setSuccessMessage(true);
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }

    hideTimerRef.current = setTimeout(() => {
      setSuccessMessage(false);
    }, 3000)
  }

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
      <SuccessMessage visible={successMessage} />
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
            <button className={styles.buyNow}>Buy Now</button>
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
