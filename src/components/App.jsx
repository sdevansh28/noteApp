import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [list, setList] = useState([]);

  const addNote = (note) => setList((prev) => [...prev, note]);

  const removeNote = (id) =>
    setList((prev) => prev.filter((el, idx) => idx !== id));

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      <div className="notes">
        {list.map((e, idx) => (
          <Note
            key={idx}
            id={idx}
            deleteNote={removeNote}
            title={e.title}
            content={e.content}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
