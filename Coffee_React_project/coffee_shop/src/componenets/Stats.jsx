function Stats({ coffees }) {
  const totalCoffee = coffees.length;

  const hotCoffee = coffees.filter((coffee) => {
    return coffee.category === "Hot Coffee";
  }).length;

  const coldCoffee = coffees.filter((coffee) => {
    return coffee.category === "Cold Coffee";
  }).length;

  return (
    <div className="stats">
      <div className="stat-card">
        <span>{"\u2615"}</span>
        <div>
          <p>Total Products</p>
          <h2>{totalCoffee}</h2>
        </div>
      </div>

      <div className="stat-card">
        <span>{"\u{1F525}"}</span>
        <div>
          <p>Hot Coffee</p>
          <h2>{hotCoffee}</h2>
        </div>
      </div>

      <div className="stat-card">
        <span>{"\u{1F9CA}"}</span>
        <div>
          <p>Cold Coffee</p>
          <h2>{coldCoffee}</h2>
        </div>
      </div>
    </div>
  );
}

export default Stats;
