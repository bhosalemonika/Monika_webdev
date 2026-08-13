import CoffeeCard from "./coffeeCard";

function CoffeeList({ coffees, onEdit, onDelete }) {
  return (
    <section className="products-section">
      <div className="section-header">
        <div>
          <h2>Our Coffee Menu</h2>
          <p>Manage your available products.</p>
        </div>

        <span>{coffees.length} products</span>
      </div>

      {coffees.length === 0 ? (
        <div className="empty-state">
          <div>{"\u2615"}</div>
          <h3>No coffee available</h3>
          <p>Add your first coffee to the menu.</p>
        </div>
      ) : (
        <div className="coffee-grid">
          {coffees.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.id}
                coffee={coffee}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default CoffeeList;
