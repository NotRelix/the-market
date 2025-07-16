import PropTypes from 'prop-types'
import styles from './ProductCard.module.css'

const ProductCard = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={product.image} alt={product.title} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{product.title}</h1>
        <span>{product.rating.rate} stars | {product.rating.count}</span>
        <span className={styles.price}>${product.price}</span>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
  }),
}

export default ProductCard