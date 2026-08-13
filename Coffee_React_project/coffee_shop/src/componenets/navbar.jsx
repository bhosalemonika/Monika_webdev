function Navbar({ onAdd }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>{"\u2615"}</span>
        <strong>CoffeeHub</strong>
      </div>

      <div className="nav-links">
        <a href="#">Dashboard</a>
        <button onClick={onAdd}>+ Add Coffee</button>
      </div>
    </nav>
  );
}

export default Navbar;
