
function AddUser({setUser}){
    return(
        <>
            <h1>AddUser User</h1>
            <input type="text" placeholder="enter your name"  onChange={(event)=>setUser(event.target.value)}/>
        
            <hr/>

        </>
    );
}
export default AddUser;