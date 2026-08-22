import Child from "./Child";

function Parent() {

  function showMessage() {
    alert("Hello from Parent!");
  }

  return (
    <>
      <h1>Parent Component</h1>

      <Child onClick={showMessage} />
    </>
  );
}

export default Parent;