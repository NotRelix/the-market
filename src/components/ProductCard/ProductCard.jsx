import PropTypes from 'prop-types'
import styles from './ProductCard.module.css'
import StarRatings from 'react-star-ratings';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [starSize, setStarSize] = useState('');
  useEffect(() => {
    const updateStarChanges = () => {
      const variables = getComputedStyle(document.documentElement);
      setStarSize(variables.getPropertyValue('--star-size').trim());
    }

    updateStarChanges();
    window.addEventListener('resize', updateStarChanges);
    return () => window.removeEventListener('resize', updateStarChanges);
  }, []);
  return (
    <Link state={{ product }} to={`product/${product.id}`} className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={product.image} alt={product.title} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{product.title}</h1>
        <div className={styles.starContainer}>
          <StarRatings
            className={styles.star}
            rating={product.rating.rate}
            starRatedColor={'rgb(255, 196, 0)'}
            starDimension={starSize}
            starSpacing='0px'
          />
          <span className={styles.ratingCount}>({product.rating.count})</span>
        </div>
        <span className={styles.price}>${product.price}</span>
      </div>
    </Link>
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