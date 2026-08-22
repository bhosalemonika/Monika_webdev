import useToggle from "./userToggle";

export default function App() {

  const [value, toggleValue] = useToggle(true);

  return (
    <div>

      <button onClick={toggleValue}>
        Toggle Heading
      </button>

      <button onClick={() => toggleValue(false)}>
        Hide Heading
      </button>

      <button onClick={() => toggleValue(true)}>
        Show Heading
      </button>

      {
        value
          ? <h1>Custom Hooks in React JS</h1>
          : null
      }

    </div>
  );
}