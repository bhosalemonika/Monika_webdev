import { useDispatch, useSelector } from "react-redux";

import {
  removeFromCart,
  clearCart
} from "../redux/cartSlice";

function Cart() {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-section">

      <div className="cart-header">

        <h2>
          Cart Items: {cartItems.length}
        </h2>

        <button
          className="clear-btn"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>

      </div>

      {cartItems.length === 0 ? (
        <p className="empty-cart">
          Cart is empty
        </p>
      ) : (
        <div className="cart-list">

          {cartItems.map((item) => (
            <div
              className="cart-item"
              key={item.id}
            >

              <img
                src={item.thumbnail}
                alt={item.title}
              />

              <div>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>

              <button
                className="remove-btn"
                onClick={() =>
                  dispatch(removeFromCart(item.id))
                }
              >
                Remove
              </button>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Cart;