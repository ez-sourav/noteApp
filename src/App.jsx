
import { useState, useEffect } from "react";
import Toast from "../src/Components/Toast";
import NoteForm from "../src/Components/NoteForm";
import NoteList from "../src/Components/NoteList";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState(() => {
    const saved = localStorage.getItem("myNotes");
    return saved ? JSON.parse(saved) : [];
  });
  const [toast, setToast] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("myNotes", JSON.stringify(task));
  }, [task]);

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 1000);
  };

  const submitHandler = () => {
    if (!title.trim() && !details.trim()) {
      showToast("Please fill in at least one field!", "error");
      return;
    }

    const currentDate = new Date();
    const date = currentDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const time = currentDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const id = `note-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    setTask((prev) => [...prev, { id, title, details, date, time }]);
    setTitle("");
    setDetails("");
    showToast("Note added successfully!", "success");
  };

  const deleteNote = (id) => {
    setTask((prev) => prev.filter((note) => note.id !== id));
    setSearch("");
    showToast("Note deleted successfully!", "success");
  };

  const clearAllNotes = () => {
    const confirmClear = window.confirm("Are you sure you want to delete all notes?");
    if (!confirmClear) return;
    setTask([]);
    setSearch("");
    showToast("All notes cleared!", "success");
  };

  return (
    <div className="min-h-screen lg:h-screen flex flex-col lg:flex-row bg-black text-white lg:overflow-hidden">
      <Toast toast={toast} />
      <NoteForm
        title={title}
        setTitle={setTitle}
        details={details}
        setDetails={setDetails}
        submitHandler={submitHandler}
      />
      <NoteList 
      task={task} deleteNote={deleteNote} 
      clearAllNotes={clearAllNotes} 
      search={search}
      setSearch={setSearch}
      />
    </div>
  );
};

export default App;
