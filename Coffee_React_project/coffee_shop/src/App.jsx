import { useState } from "react";
import Navbar from "./componenets/navbar";
import Stats from "./componenets/Stats";
import CoffeeForm from "./componenets/coffeeForm";
import CoffeeList from "./componenets/coffeeList";
import "./App.css";

const startingCoffees = [
  {
    id: 1,
    name: "Cappuccino",
    price: 150,
    category: "Hot Coffee",
    size: "Medium",
  },
  {
    id: 2,
    name: "Espresso",
    price: 100,
    category: "Hot Coffee",
    size: "Small",
  },
  {
    id: 3,
    name: "Cold Coffee",
    price: 120,
    category: "Cold Coffee",
    size: "Large",
  },
];

function App() {
  const [coffees, setCoffees] = useState(startingCoffees);
  const [showForm, setShowForm] = useState(false);
  const [editingCoffee, setEditingCoffee] = useState(null);

  function openAddForm() {
    setEditingCoffee(null);
    setShowForm(true);
  }

  function openEditForm(coffee) {
    setEditingCoffee(coffee);
    setShowForm(true);
  }

  function closeForm() {
    setEditingCoffee(null);
    setShowForm(false);
  }

  function saveCoffee(coffeeData) {
    if (editingCoffee) {
      const updatedCoffee = {
        id: editingCoffee.id,
        ...coffeeData,
      };

      const updatedList = coffees.map((coffee) => {
        if (coffee.id === editingCoffee.id) {
          return updatedCoffee;
        }

        return coffee;
      });

      setCoffees(updatedList);
    } else {
      const newCoffee = {
        id: Date.now(),
        ...coffeeData,
      };

      setCoffees([...coffees, newCoffee]);
    }

    closeForm();
  }

  function deleteCoffee(id) {
    const updatedList = coffees.filter((coffee) => coffee.id !== id);
    setCoffees(updatedList);
  }

  return (
    <div className="app">
      <Navbar onAdd={openAddForm} />

      <main className="container">
        <div className="hero">
          <div>
            <p className="small-title">WELCOME TO COFFEEHUB</p>
            <h1>Coffee Shop Manager</h1>
            <p>Manage your coffee menu easily.</p>
          </div>

          <button className="add-btn" onClick={openAddForm}>
            + Add Coffee
          </button>
        </div>

        <Stats coffees={coffees} />

        {showForm && (
          <CoffeeForm
            editingCoffee={editingCoffee}
            onSave={saveCoffee}
            onCancel={closeForm}
          />
        )}

        <CoffeeList
          coffees={coffees}
          onEdit={openEditForm}
          onDelete={deleteCoffee}
        />
      </main>
    </div>
  );
}

export default App;
