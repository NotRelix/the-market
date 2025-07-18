import { useEffect, useState } from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom";
import { fetchSingleProduct } from "../../components/api/api";
import Loading from "../../components/Loading/Loading";
import styles from "./ProductPage.module.css";
import StarRatings from "react-star-ratings";
import ScrollToTop from "../../components/ScrollToTop";

const ProductPage = () => {
  const { productId } = useParams();
  const { loading, setLoading, addToCart } = useOutletContext();
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

  function handleMinus() {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  }

  function handlePlus() {
    setQuantity((prev) => prev + 1);
  }

  function handleChange(e) {
    if (e.target.value === "") {
      setQuantity(1);
      return;
    }
    if (e.target.value < 1) return;
    setQuantity(e.target.value);
  }

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
          <div className={styles.quantityContainer}>
            <button className={styles.minus} onClick={handleMinus}>
              -
            </button>
            <input
              min="1"
              className={styles.quantityInput}
              type="number"
              value={quantity}
              onChange={handleChange}
            />
            <button className={styles.plus} onClick={handlePlus}>
              +
            </button>
          </div>
          <div className={styles.buyButtons}>
            <button className={styles.buyNow}>Buy Now</button>
            <button
              onClick={() => addToCart(product, product.id, quantity)}
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
