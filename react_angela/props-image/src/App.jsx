// import "./App.css";

// const contacts = [
//   {
//     id: 1,
//     name: "Beyonce",
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/87/Beyonce_-_The_Mrs._Carter_Show_Tour%2C_2013.jpg",
//     tel: "+1 123 456 789",
//     email: "beyonce@example.com",
//   },
//   {
//     id: 2,
//     name: "Jack Bauer",
//     img: "https://randomuser.me/api/portraits/men/32.jpg",
//     tel: "+1 987 654 321",
//     email: "jack@example.com",
//   },
//   {
//     id: 3,
//     name: "Monika Bhosale",
//     img: "https://randomuser.me/api/portraits/women/44.jpg",
//     tel: "+91 98765 43210",
//     email: "monika@example.com",
//   },
// ];

// function Card(props) {
//   return (
//     <article className="card">
//       <img className="avatar" src={props.img} alt={props.name} />
//       <h2>{props.name}</h2>
//       <p>{props.tel}</p>
//       <p>{props.email}</p>
//     </article>
//   );
// }

// function App() {
//   return (
//     <main className="app">
//       <header className="page-header">
//         <p>Props Image Project</p>
//         <h1>Contact Cards</h1>
//       </header>

//       <section className="card-grid">
//         {contacts.map((contact) => (
//           <Card
//             key={contact.id}
//             name={contact.name}
//             img={contact.img}
//             tel={contact.tel}
//             email={contact.email}
//           />
//         ))}
//       </section>
//     </main>
//   );
// }

// export default App;






// import { useState } from "react";

// function App() {

//   const [name, setName] = useState("Monika");

//   function changeName() {
//     setName("React Developer");
//   }

//   return (
//     <div>

//       <h1>Hello {name}</h1>

//       <button onClick={changeName}>
//         Change Name
//       </button>

//     </div>
//   );
// }

// export default App; 



// import { useState } from "react";

// function App() {
//   const now = new Date().toLocaleTimeString();

//   const [time, setTime] = useState(now);

//   function updateTime() {
//     const newTime = new Date().toLocaleTimeString();

//     setTime(newTime);
//   }

//   return (
//     <div>
//       <h1>{time}</h1>

//       <button onClick={updateTime}>
//         Get Time
//       </button>
//     </div>
//   );
// }

// export default App;



// import cars from "./components/practice";

// function App() {

//   const [honda, tesla] = cars;

//   const { model: hondaModel } = honda;
//   const { model: teslaModel } = tesla;

//   const {
//     speedStats: { topSpeed: hondaSpeed }
//   } = honda;

//   const {
//     speedStats: { topSpeed: teslaSpeed }
//   } = tesla;

//   const {
//     coloursByPopularity: [hondaColour]
//   } = honda;

//   const {
//     coloursByPopularity: [teslaColour]
//   } = tesla;

//   return (
//     <div>
//       <h1>Cars</h1>

//       <p>{hondaModel} - {hondaSpeed} - {hondaColour}</p>

//       <p>{teslaModel} - {teslaSpeed} - {teslaColour}</p>
//     </div>
//   );
// }

// export default App;



// import { useState } from "react";

// function App() {

//   const [headingText, setHeadingText] = useState("Hello");

//   const [isMousedOver, setMouseOver] = useState(false);

//   function handleClick() {
//     setHeadingText("Submitted");
//   }

//   function handleMouseOver() {
//     setMouseOver(true);
//   }

//   function handleMouseOut() {
//     setMouseOver(false);
//   }

//   return (
//     <div>
//       <h1>{headingText}</h1>

//       <input
//         type="text"
//         placeholder="What's your name?"
//       />

//       <button
//         onClick={handleClick}
//         onMouseOver={handleMouseOver}
//         onMouseOut={handleMouseOut}
//         style={{
//           backgroundColor: isMousedOver ? "black" : "white",
//           color: isMousedOver ? "white" : "black"
//         }}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

// export default App;



// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [headingText, setHeadingText] = useState("");

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     setHeadingText(name);
//   }

//   return (
//     <div>
//       <h1>Hello {headingText}</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="What's your name?"
//           value={name}
//           onChange={handleChange}
//         />

//         <button type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;



// import { useState } from "react";

// function App() {

//   const [name, setName] = useState("");

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   return (
//     <div>
//       <input onChange={handleChange} />

//       <h1>Hello {name}</h1>
//     </div>
//   );
// }

// export default App;


// import React from "react";

// class ClassComponent extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0
//     };
//   }

//   increase() {
//     this.setState({
//       count: this.state.count + 1
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>

//         <button onClick={() => this.increase()}>
//           Increase
//         </button>
//       </div>
//     );
//   }
// }

// export default ClassComponent;


// import { useState } from "react";

// function App() {
//   const [fullName, setFullName] = useState({
//     fName: "",
//     lName: ""
//   });

//   function handleChange(event) {
//     const newValue = event.target.value;
//     const inputName = event.target.name;

//     setFullName((prevValue) => {

//       if (inputName === "fName") {
//         return {
//           fName: newValue,
//           lName: prevValue.lName
//         };
//       }

//       if (inputName === "lName") {
//         return {
//           fName: prevValue.fName,
//           lName: newValue
//         };
//       }

//     });
//   }

//   return (
//     <div>
//       <h1>
//         Hello {fullName.fName} {fullName.lName}
//       </h1>

//       <input
//         name="fName"
//         value={fullName.fName}
//         onChange={handleChange}
//         placeholder="First Name"
//       />

//       <input
//         name="lName"
//         value={fullName.lName}
//         onChange={handleChange}
//         placeholder="Last Name"
//       />
//     </div>
//   );
// }

// export default App;



// import { useState } from "react";

// function App() {
//   const [contact, setContact] = useState({
//     fName: "",
//     lName: "",
//     email: ""
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setContact((prevContact) => {
//       if (name === "fName") {
//         return {
//           fName: value,
//           lName: prevContact.lName,
//           email: prevContact.email
//         };
//       }

//       if (name === "lName") {
//         return {
//           fName: prevContact.fName,
//           lName: value,
//           email: prevContact.email
//         };
//       }

//       if (name === "email") {
//         return {
//           fName: prevContact.fName,
//           lName: prevContact.lName,
//           email: value
//         };
//       }
//     });
//   }

//   return (
//     <div>
//       <h1>
//         Hello {contact.fName} {contact.lName}
//       </h1>

//       <p>{contact.email}</p>

//       <input
//         name="fName"
//         placeholder="First Name"
//         value={contact.fName}
//         onChange={handleChange}
//       />

//       <input
//         name="lName"
//         placeholder="Last Name"
//         value={contact.lName}
//         onChange={handleChange}
//       />

//       <input
//         name="email"
//         placeholder="Email"
//         value={contact.email}
//         onChange={handleChange}
//       />
//     </div>
//   );
// }

// export default App;



// import React, { useState } from "react";

// function App() {
//   const [contact, setContact] = useState({
//     fName: "",
//     lName: "",
//     email: ""
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setContact(prevValue => {
//       if (name === "fName") {
//         return {
//           fName: value,
//           lName: prevValue.lName,
//           email: prevValue.email
//         };
//       } else if (name === "lName") {
//         return {
//           fName: prevValue.fName,
//           lName: value,
//           email: prevValue.email
//         };
//       } else if (name === "email") {
//         return {
//           fName: prevValue.fName,
//           lName: prevValue.lName,
//           email: value
//         };
//       }
//     });
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {contact.fName} {contact.lName}
//       </h1>
//       <p>{contact.email}</p>
//       <form>
//         <input
//           onChange={handleChange}
//           name="fName"
//           value={contact.fName}
//           placeholder="First Name"
//         />
//         <input
//           onChange={handleChange}
//           name="lName"
//           value={contact.lName}
//           placeholder="Last Name"
//         />
//         <input
//           onChange={handleChange}
//           name="email"
//           value={contact.email}
//           placeholder="Email"
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;




// import { useState } from "react";

// function App() {
//   const [contact, setContact] = useState({
//     fName: "",
//     lName: "",
//     email: ""
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setContact((prevContact) => {
//       return {
//         ...prevContact,
//         [name]: value
//       };
//     });
//   }

//   return (
//     <div>
//       <h1>
//         Hello {contact.fName} {contact.lName}
//       </h1>

//       <p>{contact.email}</p>

//       <form>
//         <input
//           name="fName"
//           placeholder="First Name"
//           value={contact.fName}
//           onChange={handleChange}
//         />

//         <input
//           name="lName"
//           placeholder="Last Name"
//           value={contact.lName}
//           onChange={handleChange}
//         />

//         <input
//           name="email"
//           placeholder="Email"
//           value={contact.email}
//           onChange={handleChange}
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;




// import { useState } from "react";

// function App() {
//   const [inputText, setInputText] = useState("");
//   const [items, setItems] = useState([]);

//   function handleChange(event) {
//     const newValue = event.target.value;

//     setInputText(newValue);
//   }

//   function addItem() {
//     setItems((prevItems) => {
//       return [...prevItems, inputText];
//     });

//     setInputText("");
//   }

//   return (
//     <div>
//       <h1>To-Do List</h1>

//       <input
//         type="text"
//         value={inputText}
//         onChange={handleChange}
//       />

//       <button onClick={addItem}>Add</button>

//       <ul>
//         {items.map((todoItem) => (
//           <li>{todoItem}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



// import { useState } from "react";
// import ToDoItem from "./components/todoitem";

// function App() {

//     const [items, setItems] = useState([
//         "Buy Milk",
//         "Buy Eggs",
//         "Buy Bacon"
//     ]);

//     function deleteItem(id) {

//         setItems(prevItems => {
//             return prevItems.filter((item, index) => {
//                 return index !== id;
//             });
//         });
//     }

//     return (
//         <div>
//             <h1>My Todo List</h1>

//             {items.map((todoItem, index) => (
//                 <ToDoItem
//                     key={index}
//                     id={index}
//                     text={todoItem}
//                     onChecked={deleteItem}
//                 />
//             ))}
//         </div>
//     );
// }

// export default App;

import { useState } from "react";
import InputArea from "./components/inputarea";
import ToDoItem from "./components/titem";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => index !== id);
    });
  }

  return (
    <div>
      <h1>My Todo List</h1>

      <InputArea onAdd={addItem} />

      <ul>
        {items.map((todoItem, index) => (
          <ToDoItem
            key={index}
            id={index}
            text={todoItem}
            onChecked={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;