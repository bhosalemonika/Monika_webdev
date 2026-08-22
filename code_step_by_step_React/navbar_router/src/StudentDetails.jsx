import { useParams } from "react-router";

function StudentDetails() {

    const { id } = useParams();

    return (
        <div>

            <h2>Student Details</h2>

            <h3>Student ID: {id}</h3>

        </div>
    );
}

export default StudentDetails;