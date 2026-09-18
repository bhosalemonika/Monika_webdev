import { useState } from "react";
import ToDoItem from "./components/ToDoItem";

function App() {
  const [items, setItems] = useState([
    "Buy Milk",
    "Buy Eggs",
    "Buy Bacon"
  ]);

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <h1>My Todo List</h1>

      <ul>
        {items.map((todoItem, index) => (
          <ToDoItem
            key={index}
            id={index}
            text={todoItem}
            onChecked={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;