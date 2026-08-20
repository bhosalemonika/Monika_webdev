import { useState } from "react";
import "./App.css";

function App() {

  const [cardStyle, setCardStyle] = useState({
    border: "2px solid black",
    backgroundColor: "white",
    color: "black"
  });

  const updateTheme = (bgColor, textColor) => {
    setCardStyle({
      ...cardStyle,
      backgroundColor: bgColor,
      color: textColor
    });
  };

  const [grid,setGrid]=useState(true);

  return (
    <>
      <h1>Dynamic And Conditional Inline Style</h1>

      <button onClick={() => updateTheme("grey", "red")}>
        Grey Theme
      </button>

      <button onClick={() => updateTheme("white", "black")}>
        Default Theme
      </button>

      <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>

      <div  style={{display:grid?"flex":"block", flexWrap:"wrap"}}>

      <div style={cardStyle}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
          alt="img"
          style={{ width: "200px" }}
        />

        <div>
          <h4>Monika Bhosale</h4>
          <h4>Software Developer</h4>
        </div>
      </div>


       <div style={cardStyle}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
          alt="img"
          style={{ width: "200px" }}
        />

        <div>
          <h4>Monika Bhosale</h4>
          <h4>Software Developer</h4>
        </div>
      </div>


       <div style={cardStyle}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
          alt="img"
          style={{ width: "200px" }}
        />

        <div>
          <h4>Monika Bhosale</h4>
          <h4>Software Developer</h4>
        </div>
      </div>



       <div style={cardStyle}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
          alt="img"
          style={{ width: "200px" }}
        />

        <div>
          <h4>Monika Bhosale</h4>
          <h4>Software Developer</h4>
        </div>
      </div>


       <div style={cardStyle}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
          alt="img"
          style={{ width: "200px" }}
        />

        <div>
          <h4>Monika Bhosale</h4>
          <h4>Software Developer</h4>
        </div>
      </div>

       <div style={cardStyle}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
          alt="img"
          style={{ width: "200px" }}
        />

        <div>
          <h4>Monika Bhosale</h4>
          <h4>Software Developer</h4>
        </div>
      </div>



</div>
    </>
  );
}

export default App;