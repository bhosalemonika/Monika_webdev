import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(
      "https://dummyjson.com/products"
    );

    const data = await response.json();

    setProducts(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main>
      <h1>React Redux Toolkit Tutorials</h1>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;