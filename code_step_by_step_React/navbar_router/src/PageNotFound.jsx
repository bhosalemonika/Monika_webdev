import {Link} from "react-router"

export default function PageNotFound(){
    return(
        <div>
            <h1>Page Not Found</h1>
         <img style={{width:'60%'}} src="https://png.pngtree.com/png-clipart/20210704/original/pngtree-error-404-page-not-found-website-png-image_6501259.jpg"/>
            <Link to="/Home">Go To Home Page</Link>
        </div>
    );
}