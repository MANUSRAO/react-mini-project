import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { useState } from "react";
function App() {
  const [notes, setNotes] = useState([]);
  // Handling Submit
  const submitter = (note) => {
    setNotes((prev) => {
      return [...prev, note];
    });
  };
  // Handling Deletion
  const deleteNote = (id) => {
    setNotes((prev) => {
      return prev.filter((note, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div>
      <Header />
      <CreateArea onSubmit={submitter} />
      <div className="notes">
        {notes.map((note, index) => {
          return (
            <Note
              title={note.title}
              content={note.content}
              key={index}
              id={index}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
