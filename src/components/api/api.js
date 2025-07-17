export async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error(`Unable to fetch ${response.status}`);
    }
    const products = await response.json();
    return { products }; 
  } catch (err) {
    console.error(`Failed to fetch products: ${err}`);
    return { products: [] };
  }
}

export async function fetchSingleProduct(productId) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    if (!response.ok) {
      throw new Error(`Unable to fetch ${response.status}`);
    }
    const products = await response.json();
    return { products }; 
  } catch (err) {
    console.error(`Failed to fetch products: ${err}`);
    return { products: [] };
  }
}