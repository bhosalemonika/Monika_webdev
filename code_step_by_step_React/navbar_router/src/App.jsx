import {BrowserRouter,Routes,Route,Navigate} from "react-router";

import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import Details from "./Details";
import StudentDetails from "./StudentDetails";
import PageNotFound from "./PageNotFound";

function App() {

    return (
        <BrowserRouter>

            <Routes>

                {/* Navbar Layout */}
                <Route element={<Navbar />}>

                    <Route
                        path="/Home"
                        
                        element={<Home />}
                    />

                    <Route
                        path="/About"
                        element={<About />}
                    />

  
                    <Route path="/user">

                        <Route
                            path="Login"
                            element={<Login />}
                        />

                        <Route
                            path="signup"
                            element={<Login />}
                        />

                        <Route
                            path="forget"
                            element={<Login />}
                        />

                    </Route>

                </Route>

                <Route
                    path="/College"
                    element={<College />}
                >

                    <Route
                        index
                        element={<Student />}
                    />

          

                    <Route
                        path="Department"
                        element={<Department />}
                    />

                    <Route
                        path="Details"
                        element={<Details />}
                    />

                     {/* <Route
                        path="Student/:id"
                  
                        element={<StudentDetails />}
                    /> */}


                </Route>


{/*               
                <Route
                    path="*"
                    element={<Navigate to="/user/Login" />}


                /> */}
                <Route
                    path="*"
                    element={<PageNotFound/>}

                    
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;














// import { BrowserRouter, Routes, Route, Link } from "react-router";
// import User from "./User";

// function App() {
//     return (
//         <BrowserRouter>

//             <Link to="/user/1">User 1</Link>
//             <br />

//             <Link to="/user/2">User 2</Link>
//             <br />

//             <Link to="/user/3">User 3</Link>

//             <Routes>

//                 <Route
//                     path="/user/:id"
//                     element={<User />}
//                 />

//             </Routes>

//         </BrowserRouter>
//     );
// }

// export default App;