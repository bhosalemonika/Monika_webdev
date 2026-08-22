import {Link, NavLink, Outlet} from "react-router";
import "./header.css";

export default function Navbar(){
    return <div>

        <div className="header">
        <div>
            <Link className="link"><h2>Logo</h2></Link>
        </div>
        <div >
            <ul className="unorderlist"> 
                <li>
                       <NavLink 
                       
                         className={({ isActive }) =>
        isActive ? "active" : ""
    }
                       to="/home"><h2>Home</h2></NavLink>
                </li>
                <li>
                       <NavLink 
                           
                         className={({ isActive }) =>
        isActive ? "active" : ""
    }
                       to="/user/Login"><h2>Login</h2></NavLink>
                </li>
                <li>
                       <NavLink 
                           
                         className={({ isActive }) =>
        isActive ? "active" : ""
    }
                       to="/About"><h2>About</h2></NavLink>
                </li>
                 <li>
                       <NavLink 
                           
                         className={({ isActive }) =>
        isActive ? "active" : ""
    }
                       to="/College"><h2>College</h2></NavLink>
                </li>
            </ul>
        </div>
    </div>
    <Outlet/>
    </div>

}