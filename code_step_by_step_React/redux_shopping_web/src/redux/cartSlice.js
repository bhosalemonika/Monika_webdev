// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: []
// };

// const cartSlice = createSlice({
//   name: "cart",

//   initialState,

//   reducers: {
//     addToCart: (state, action) => {
//       state.items.push(action.payload);
//     },

//     removeFromCart: (state, action) => {
//       state.items = state.items.filter(
//         (item) => item.id !== action.payload
//       );
//     },

//     clearCart: (state) => {
//       state.items = [];
//     }
//   }
// });

// export const {
//   addToCart,
//   removeFromCart,
//   clearCart
// } = cartSlice.actions;

// export default cartSlice.reducer;




// import { createSlice } from "@reduxjs/toolkit";

// const savedCart =
//   JSON.parse(localStorage.getItem("cart")) || [];

// const initialState = {
//   items: savedCart
// };

// const cartSlice = createSlice({
//   name: "cart",

//   initialState,

//   reducers: {
//     addToCart: (state, action) => {
//       state.items.push(action.payload);

//       localStorage.setItem(
//         "cart",
//         JSON.stringify(state.items)
//       );
//     },

//     removeFromCart: (state, action) => {
//       state.items = state.items.filter(
//         (item) => item.id !== action.payload
//       );

//       localStorage.setItem(
//         "cart",
//         JSON.stringify(state.items)
//       );
//     },

//     clearCart: (state) => {
//       state.items = [];

//       localStorage.removeItem("cart");
//     }
//   }
// });

// export const {
//   addToCart,
//   removeFromCart,
//   clearCart
// } = cartSlice.actions;

// export default cartSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";

// const savedCart =
//   JSON.parse(localStorage.getItem("cart")) || [];

// const initialState = {
//   items: savedCart,
// };

// const cartSlice = createSlice({
//   name: "cart",

//   initialState,

//   reducers: {

//     addToCart: (state, action) => {

//       state.items.push(action.payload);

//       localStorage.setItem(
//         "cart",
//         JSON.stringify(state.items)
//       );
//     },


//     removeFromCart: (state, action) => {

//       state.items = state.items.filter(
//         (item) => item.id !== action.payload
//       );

//       localStorage.setItem(
//         "cart",
//         JSON.stringify(state.items)
//       );
//     },


//     clearCart: (state) => {

//       // Redux clear
//       state.items = [];

//       // localStorage clear
//       localStorage.removeItem("cart");
//     },

//   },
// });

// export const {
//   addToCart,
//   removeFromCart,
//   clearCart,
// } = cartSlice.actions;

// export default cartSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const savedCart =
  JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  items: savedCart,
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {

    // ADD PRODUCT
    addToCart: (state, action) => {

      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {

        existingItem.quantity += 1;

      } else {

        state.items.push({
          ...action.payload,
          quantity: 1,
        });

      }

      localStorage.setItem(
        "cart",
        JSON.stringify(state.items)
      );
    },


    // CHANGE QUANTITY
    updateQuantity: (state, action) => {

      const item = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (item) {
        item.quantity = action.payload.quantity;
      }

      localStorage.setItem(
        "cart",
        JSON.stringify(state.items)
      );
    },


    // REMOVE ONE PRODUCT
    removeFromCart: (state, action) => {

      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem(
        "cart",
        JSON.stringify(state.items)
      );
    },


    // CLEAR CART
    clearCart: (state) => {

      state.items = [];

      localStorage.removeItem("cart");
    },

  },
});

export const {
  addToCart,
  updateQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;