import PropTypes from 'prop-types'
import styles from './ProductCard.module.css'

const ProductCard = ({ product }) => {
  return (
    <div>
      <h1>{product.title}</h1>
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