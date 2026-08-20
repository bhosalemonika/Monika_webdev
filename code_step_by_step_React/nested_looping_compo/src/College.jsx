import Student from "./Student"
const College=({college})=>{
    return(
        <div 
            style={{
                backgroundColor:"grey",
                color:"blue",
                borderBottom:"2px solid black",
                margin:'20px',
                padding:"10px"         
            }}
        >
             <h1>Name:{college.name}</h1>
           <ul>
            <li>
              <h3>Name:{college.city}</h3>
            </li>
            <li>
              <Student student={college.student}/>
            </li>
           </ul>


        </div>
    );

}

export default College;