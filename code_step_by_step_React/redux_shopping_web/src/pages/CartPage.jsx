// import { useDispatch, useSelector } from "react-redux";

// import {
//   removeFromCart,
//   clearCart
// } from "../redux/cartSlice";

// function CartPage() {

//   const cartItems = useSelector(
//     (state) => state.cart.items
//   );

//   const dispatch = useDispatch();

//   // Total Price
//   const totalPrice = cartItems.reduce(
//     (total, item) => total + item.price,
//     0
//   );

//   return (
//     <div className="cart-page">

//       <h1>Cart Item Listing</h1>

//       {cartItems.length === 0 ? (

//         <div className="empty-cart">
//           <h2>Your Cart is Empty</h2>
//         </div>

//       ) : (

//         <>
//           {/* Cart Summary */}

//           <div className="cart-summary">

//             <h2>
//               Total Items: {cartItems.length}
//             </h2>

//             <h2>
//               Total Price: ${totalPrice.toFixed(2)}
//             </h2>

//             <button
//               onClick={() => dispatch(clearCart())}
//             >
//               Clear Cart
//             </button>

//           </div>


//           {/* Cart Items */}

//           <div className="cart-list">

//             {cartItems.map((item) => (

//               <div
//                 className="cart-card"
//                 key={item.id}
//               >

//                 <img
//                   src={item.thumbnail}
//                   alt={item.title}
//                 />

//                 <div className="cart-info">

//                   <h2>{item.title}</h2>

//                   <p>
//                     Category: {item.category}
//                   </p>

//                   <p className="cart-price">
//                     ${item.price}
//                   </p>

//                 </div>

//                 <button
//                   className="remove-btn"
//                   onClick={() =>
//                     dispatch(
//                       removeFromCart(item.id)
//                     )
//                   }
//                 >
//                   Remove
//                 </button>

//               </div>

//             ))}

//           </div>

//         </>
//       )}

//     </div>
//   );
// }

// export default CartPage;




// import { useDispatch, useSelector } from "react-redux";

// import {
//   removeFromCart,
//   clearCart,
// } from "../redux/cartSlice";

// function CartPage() {

//   const cartItems = useSelector(
//     (state) => state.cart.items
//   );

//   const dispatch = useDispatch();


//   // Calculate total price
//   const totalPrice = cartItems.reduce(
//     (total, item) => total + item.price,
//     0
//   );


//   // Place Order
//   const handleOrder = () => {

//     if (cartItems.length === 0) {
//       alert("Cart is empty");
//       return;
//     }

//     alert("Order placed successfully!");

//     dispatch(clearCart());
//   };


//   return (
//     <div className="cart-page">

//       <h1>My Cart</h1>


//       {cartItems.length === 0 ? (

//         <h2>Your Cart is Empty</h2>

//       ) : (

//         <>
//           {/* Cart Items */}

//           <div className="cart-list">

//             {cartItems.map((item) => (

//               <div
//                 className="cart-card"
//                 key={item.id}
//               >

//                 <img
//                   src={item.thumbnail}
//                   alt={item.title}
//                 />

//                 <div className="cart-info">

//                   <h2>{item.title}</h2>

//                   <p>
//                     Category: {item.category}
//                   </p>

//                   <p>
//                     ${item.price}
//                   </p>

//                 </div>


//                 <button
//                   onClick={() =>
//                     dispatch(
//                       removeFromCart(item.id)
//                     )
//                   }
//                 >
//                   Remove
//                 </button>

//               </div>

//             ))}

//           </div>


//           {/* Order Summary */}

//           <div className="order-summary">

//             <h2>
//               Total Items: {cartItems.length}
//             </h2>

//             <h2>
//               Total Price: $
//               {totalPrice.toFixed(2)}
//             </h2>


//             <button
//               onClick={handleOrder}
//               className="order-btn"
//             >
//               Place Order
//             </button>


//             <button
//               onClick={() =>
//                 dispatch(clearCart())
//               }
//               className="clear-btn"
//             >
//               Clear Cart
//             </button>

//           </div>

//         </>
//       )}

//     </div>
//   );
// }

// export default CartPage;




import { useDispatch, useSelector } from "react-redux";

import {
  updateQuantity,
  removeFromCart,
  clearCart,
} from "../redux/cartSlice";

function CartPage() {

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const dispatch = useDispatch();


  // TOTAL ITEMS
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );


  // TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  // PLACE ORDER
  const handleOrder = () => {

    if (cartItems.length === 0) {
      alert("Cart is empty");
      return;
    }

    alert("Order placed successfully!");

    dispatch(clearCart());
  };


  return (
    <div className="cart-page">

      <h1>Cart Items</h1>


      {cartItems.length === 0 ? (

        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
        </div>

      ) : (

        <>

          {/* CART ITEMS */}

          <div className="cart-list">

            {cartItems.map((item) => (

              <div
                className="cart-card"
                key={item.id}
              >

                {/* IMAGE */}

                <img
                  src={item.thumbnail}
                  alt={item.title}
                />


                {/* INFORMATION */}

                <div className="cart-info">

                  <h2>{item.title}</h2>

                  <p>
                    Category: {item.category}
                  </p>

                  {/* ORIGINAL PRICE */}

                  <p>
                    Price: ${item.price}
                  </p>


                  {/* QUANTITY */}

                  <div className="quantity-box">

                    <label>
                      Quantity:
                    </label>

                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity:
                              Number(e.target.value),
                          })
                        )
                      }
                    />

                  </div>


                  {/* PRICE ACCORDING TO QUANTITY */}

                  <p className="item-total">
                    Item Total: $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                </div>


                {/* REMOVE */}

                <button
                  className="remove-btn"
                  onClick={() =>
                    dispatch(
                      removeFromCart(item.id)
                    )
                  }
                >
                  Remove
                </button>

              </div>

            ))}

          </div>


          {/* ORDER SUMMARY */}

          <div className="order-summary">

            <h2>
              Total Items: {totalItems}
            </h2>

            <h2>
              Total Price: $
              {totalPrice.toFixed(2)}
            </h2>


            <button
              className="order-btn"
              onClick={handleOrder}
            >
              Place Order
            </button>


            <button
              className="clear-btn"
              onClick={() =>
                dispatch(clearCart())
              }
            >
              Clear Cart
            </button>

          </div>

        </>
      )}

    </div>
  );
}

export default CartPage;