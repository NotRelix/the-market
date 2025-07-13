import { useEffect, useState } from 'react'
import './App.css'
import { fetchProducts } from './components/api/api'

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function loadProducts() {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      console.log(fetchedProducts);
    }
    loadProducts();
  }, []);

  return (
    <>
      <h1>Home Page</h1>
    </>
  )
}

export default App
