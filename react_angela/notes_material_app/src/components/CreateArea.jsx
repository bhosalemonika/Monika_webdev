import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function expand() {
    setExpanded(true);
  }

  function submitNote(event) {
    event.preventDefault();

    if (note.title.trim() === "" && note.content.trim() === "") {
      return;
    }

    props.onAdd({
      id: Date.now(),
      title: note.title,
      content: note.content
    });

    setNote({
      title: "",
      content: ""
    });

    setExpanded(false);
  }

  return (
    <div className="create-area">
      <form onSubmit={submitNote}>
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
        )}

        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={note.content}
          onClick={expand}
          onChange={handleChange}
        />

        <Zoom in={isExpanded}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;