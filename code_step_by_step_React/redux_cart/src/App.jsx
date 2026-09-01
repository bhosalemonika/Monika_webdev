import "./App.css";

import Product from "./Product";
import Cart from "./Cart";

function App() {
  return (
    <div className="container">

      <h1>My Shop</h1>

      <Product />

      <Cart />

    </div>
  );
}

export default App;