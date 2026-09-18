import { Activity, useState } from "react";

function Sidebar() {
  return (
    <div>
      <h2>Sidebar</h2>
      <p>Dashboard</p>
      <p>Products</p>
      <p>Settings</p>
    </div>
  );
}

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
      <button onClick={() => setShowSidebar(!showSidebar)}>
        Toggle
      </button>

      <Activity mode={showSidebar ? "visible" : "hidden"}>
        <Sidebar />
      </Activity>
    </>
  );
}

export default App;