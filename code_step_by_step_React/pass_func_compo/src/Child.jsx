function Child(props) {

  return (
    <>
      <h2>Child Component</h2>

      <button onClick={props.onClick}>
        Click Me
      </button>
    </>
  );
}

export default Child;