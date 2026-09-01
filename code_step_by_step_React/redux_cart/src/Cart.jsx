import { useSelector, useDispatch } from "react-redux";

import { removeFromCart } from "./cartSlice";

function Cart() {
  const items = useSelector(
    (state) => state.cart.items
  );

  const dispatch = useDispatch();

  return (
    <div className="cart">

      <h2>Cart</h2>

      <h3>
        Total Items: {items.length}
      </h3>

      {items.length === 0 ? (

        <p>Your cart is empty.</p>

      ) : (

        items.map((item) => (
          <div className="cart-card" key={item.id}>

            <h3>{item.name}</h3>

            <p>₹{item.price}</p>

            <button
              onClick={() =>
                dispatch(removeFromCart(item.id))
              }
            >
              Remove
            </button>

          </div>
        ))

      )}

    </div>
  );
}

export default Cart;