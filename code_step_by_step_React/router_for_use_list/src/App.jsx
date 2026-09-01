import { Link, Route, Routes } from "react-router-dom";
import UserList from "./UserList";
import AddUser from "./AddUser";
import EditUser from "./EditUser"

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/users">User List</Link>
        {" | "}
        <Link to="/add-user">Add User</Link>
      </nav>

      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
         <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}