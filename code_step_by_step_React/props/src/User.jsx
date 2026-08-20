function User(props){
    return(
        <>
            {/* <h1>User Component</h1>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1> */}


            <h2 style={{color:props.color}}>

                Hello {props.name}
            </h2>
        </>
    );
}

export default User;