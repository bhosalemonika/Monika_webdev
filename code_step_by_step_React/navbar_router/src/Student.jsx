import { Link } from "react-router";

function Students() {

    return (
        <div>

            <h2>Students List</h2>


            <ul>

                <li>
                    <Link to="/College/Student/1">
                        Monika
                    </Link>
                </li>


                <li>
                    <Link to="/College/Student/2">
                        Rahul
                    </Link>
                </li>


                <li>
                    <Link to="/College/Student/3">
                        Priya
                    </Link>
                </li>


                <li>
                    <Link to="/College/Student/4">
                        Amit
                    </Link>
                </li>

            </ul>

        </div>
    );
}

export default Students;