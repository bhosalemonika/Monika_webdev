// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router";

// import Home from "./Home";
// import About from "./About";

// function App() {

//   return (
//     <BrowserRouter>

//       <h1>My Website</h1>

//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//       </nav>


//  <Routes>

//         <Route
//           path="/"
//           element={<Home />}
//         />

//         <Route
//           path="/about"
//           element={<About />}
//         />

//       </Routes>




//     </BrowserRouter>
//   );
// }

// export default App;




import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router";

import Home from "./Home";
import About from "./About";
function App() {

  return (

    <BrowserRouter>

      <h1>My Website</h1>

      <nav>

        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

      </nav>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />


      </Routes>

    </BrowserRouter>

  );
}

export default App;