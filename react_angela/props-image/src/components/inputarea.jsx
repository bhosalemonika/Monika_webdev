import { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleClick() {
    if (inputText.trim() !== "") {
      props.onAdd(inputText);
      setInputText("");
    }
  }

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
      />

      <button onClick={handleClick}>
        Add
      </button>
    </div>
  );
}

export default InputArea;