import { useEffect, useState } from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom"
import { fetchSingleProduct } from "../../components/api/api";
import Loading from "../../components/Loading/Loading";

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
    <section>
      <h1>{product.title}</h1>
      <h1>{product.title}</h1>
      <h1>{product.title}</h1>
      <h1>{product.title}</h1>
    </section>
  )
}

export default ProductPage