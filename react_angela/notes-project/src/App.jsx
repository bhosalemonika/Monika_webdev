import Header from "./componenets/header";
import Footer from "./componenets/footer";
import Note from "./componenets/note";
import notes from "./componenets/notes";

function App() {
  return (
    <div>
      <Header />

      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
