import Login from "./components/login";

function App() {
  const isLoggedIn = false;

  return (
    <main className="app-shell">
      {isLoggedIn ? (
        <h1>Hello</h1>
      ) : (
        <Login />
      )}
    </main>
  );
}

export default App;
