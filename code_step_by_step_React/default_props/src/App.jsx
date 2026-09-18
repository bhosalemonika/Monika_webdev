function Student({ name = "Unknown" }) {
  return <h1>Hello {name}</h1>;
}

function App() {
  return (
    <div>
      <Student name="Monika" />
      <Student />
    </div>
  );
}

export default App;