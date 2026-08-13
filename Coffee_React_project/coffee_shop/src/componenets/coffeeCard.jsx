import { useState } from "react";

function getCoffeeEmoji(category) {
  if (category === "Cold Coffee") {
    return "\u{1F9CB}";
  }

  if (category === "Dessert") {
    return "\u{1F370}";
  }

  return "\u2615";
}

function CoffeeCard({ coffee, onEdit, onDelete }) {
  const [showDelete, setShowDelete] = useState(false);

  function editCoffee() {
    onEdit(coffee);
  }

  function openDeleteBox() {
    setShowDelete(true);
  }

  function closeDeleteBox() {
    setShowDelete(false);
  }

  function deleteCoffee() {
    onDelete(coffee.id);
    setShowDelete(false);
  }

  return (
    <div className="coffee-card">
      <div className="coffee-image">
        <span>{getCoffeeEmoji(coffee.category)}</span>
      </div>

      <div className="coffee-content">
        <div className="coffee-top">
          <div>
            <h3>{coffee.name}</h3>
            <span className="category">{coffee.category}</span>
          </div>

          <strong>
            {"\u20B9"}
            {coffee.price}
          </strong>
        </div>

        <p className="size">Size: {coffee.size}</p>

        <div className="card-actions">
          <button
            type="button"
            className="edit-btn"
            onClick={editCoffee}
          >
            Edit
          </button>

          <button
            type="button"
            className="delete-btn"
            onClick={openDeleteBox}
          >
            Delete
          </button>
        </div>
      </div>

      {showDelete && (
        <div className="delete-overlay">
          <div className="delete-modal">
            <div className="warning-icon">{"\u26A0\uFE0F"}</div>
            <h3>Delete Coffee?</h3>
            <p>
              Are you sure you want to delete{" "}
              <strong>{coffee.name}</strong>?
            </p>

            <div className="modal-actions">
              <button
                type="button"
                className="cancel-btn"
                onClick={closeDeleteBox}
              >
                Cancel
              </button>

              <button
                type="button"
                className="confirm-delete"
                onClick={deleteCoffee}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CoffeeCard;
