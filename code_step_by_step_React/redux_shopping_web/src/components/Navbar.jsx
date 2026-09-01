import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  return (
    <nav className="navbar">

      <h2>MyShop</h2>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/">
          Products
        </Link>

        <Link to="/cart">
          🛒
          <span>
            {cartItems.length}
          </span>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;