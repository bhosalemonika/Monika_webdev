import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <button className="button" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <h1 className="title">Dark Mode</h1>

      <div className="card">
        <p className="text">Hello React + Tailwind!</p>
      </div>
    </div>
  );
}

export default App;