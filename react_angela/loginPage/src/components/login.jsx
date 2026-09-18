import Input from "./Input";

function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Login clicked");
  }

  return (
    <div className="login-card">

      <h1>Welcome Back</h1>

      <form onSubmit={handleSubmit}>

        <Input
          type="text"
          placeholder="Username"
        />

        <Input
          type="password"
          placeholder="Password"
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;