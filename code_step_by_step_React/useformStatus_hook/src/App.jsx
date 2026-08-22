import { useFormStatus } from "react-dom";

function App() {

  const handleSubmit = async () => {
    await new Promise(res => setTimeout(res, 2000));

    console.log("submit");
  };

  function CustomerForm() {

    const { pending } = useFormStatus();

    console.log("pending:", pending);

    return (
      <div>
        <input
          type="text"
          placeholder="Enter Name"
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
        />

        <br /><br />

        <button disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>UseFormStatus Hook</h1>

      <form action={handleSubmit}>
        <CustomerForm />
      </form>

    </div>
  );
}

export default App;