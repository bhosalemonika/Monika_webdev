import { useActionState } from "react";

function App() {

  const handleSubmit = async (previousData, formData) => {

    const name = formData.get("name");
    const password = formData.get("password");

    if (name && password) {
      return {
        message: "Data Submitted Successfully"
      };
    } 
    else {
      return {
        error: "Failed to Submit. Enter proper data"
      };
    }
  };

  const [data, action, pending] =
    useActionState(handleSubmit, undefined);

  console.log(data);

  return (
    <div>

      <h1>useActionState Hook in React JS</h1>

      <form action={action}>

        <input
          type="text"
          placeholder="Enter name"
          name="name"
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter password"
          name="password"
        />

        <br /><br />

        <button disabled={pending}>
          {pending ? "Submitting..." : "Submit Data"}
        </button>

      </form>

      {data?.message && (
        <p>{data.message}</p>
      )}

      {data?.error && (
        <p>{data.error}</p>
      )}

    </div>
  );
}

export default App;