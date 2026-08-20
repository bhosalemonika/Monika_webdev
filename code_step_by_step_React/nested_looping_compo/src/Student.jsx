const Student=({student})=>{
    return(
        <>
              <h3>Student Details</h3>
                {
                    student.map((item)=>{
                        return(
                        <ul>
                            <li>{item.name}</li>
                            <li>{item.age}</li>
                            <li>{item.email}</li>
                            <br/><br/>
                        </ul>
                        );
                    })
                }
        </>

    );
}

export default Student;