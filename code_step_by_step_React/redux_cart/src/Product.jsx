import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

function Product() {
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "Apple",
      price: 100
    },
    {
      id: 2,
      name: "Milk",
      price: 50
    },
    {
      id: 3,
      name: "Bread",
      price: 40
    }
  ];

  return (
    <div className="products">

      <h2>Products</h2>

      {products.map((product) => (
        <div className="product-card" key={product.id}>

          <h3>{product.name}</h3>

          <p>₹{product.price}</p>

          <button
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>

        </div>
      ))}

    </div>
  );
}

export default Product;