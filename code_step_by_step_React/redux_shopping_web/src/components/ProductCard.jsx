// import { useDispatch } from "react-redux";

// import { addToCart } from "../redux/cartSlice";

// function ProductCard({ product }) {

//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//   };

//   return (
//     <div className="product-card">

//       <img
//         src={product.thumbnail}
//         alt={product.title}
//       />

//       <h3>{product.title}</h3>

//       <p>{product.category}</p>

//       <p>${product.price}</p>

//       <p>⭐ {product.rating}</p>

//       <button onClick={handleAddToCart}>
//         Add to Cart
//       </button>

//     </div>
//   );
// }

// export default ProductCard;



import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductCard({ product }) {

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">

      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p>{product.category}</p>

      <p>${product.price}</p>

      <p>⭐ {product.rating}</p>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;