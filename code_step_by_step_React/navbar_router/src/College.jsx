import {Link, NavLink,Outlet} from "react-router";
import "./header.css";

export default function College(){
    return(
        <div className="college">
        <h3><Link to="/Home">Go back to Home</Link></h3>
        <NavLink className="link" to="">Students</NavLink>
         <NavLink className="link" to="Department">Department</NavLink>
          <NavLink className="link" to="Details">college details</NavLink>
        <Outlet/>
        </div>
    );
}