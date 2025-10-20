
import { useState } from "react";
import { ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import NoteItem from "./NoteItem";

const NoteList = ({ task, deleteNote, clearAllNotes, search, setSearch }) => {
  const [showNotes, setShowNotes] = useState(false);
  

  const filteredTasks = task.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.details.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 lg:border-l-2 w-full lg:w-1/2 h-screen overflow-hidden flex flex-col">
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <h1 className="text-2xl sm:text-3xl font-bold">Recent Notes</h1>
        {task.length > 0 && (
          <button
            onClick={() => setShowNotes(!showNotes)}
            className="lg:hidden bg-white text-black px-3 py-2 rounded-full active:scale-95 hover:bg-gray-200 hover:cursor-pointer transition-colors flex items-center gap-2"
          >
            <span className="font-bold text-sm ">{task.length}</span>
            {showNotes ? <ChevronUp   size={20} /> : <ChevronDown  size={20} />}
          </button>
        )}
      </div>

      {task.length > 0 && (
        <div className={`flex-col sm:flex-row gap-3 mb-4 ${showNotes ? "flex lg:flex" : "hidden lg:flex"}`}>
          <input
            type="text"
            placeholder="Search notes..."
            className="flex-1 px-3 py-2 w-full rounded bg-white text-black outline-none border border-gray-300 text-sm sm:text-base"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={clearAllNotes}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded font-semibold text-sm sm:text-base hover:bg-red-700  hover:cursor-pointer active:scale-95 transition-all"
          >
            <Trash2 size={16} />
            Clear All
          </button>
        </div>
      )}

      <div
        className={`grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-5 flex-1 overflow-auto no-scrollbar pb-4 ${
          showNotes || task.length === 0 ? "block" : "hidden lg:grid"
        }`}
      >
        {filteredTasks.length === 0 ? (
          <div className="col-span-full flex items-center justify-center h-full">
            <div className="text-center text-gray-400">
              <div className="text-5xl sm:text-6xl mb-4">📝</div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2">
                {task.length === 0 ? "No Notes Yet" : "No Notes Found"}
              </h2>
              <p className="text-sm sm:text-base">
                {task.length === 0
                  ? "Start by adding your first note above!"
                  : "Try a different search term."}
              </p>
            </div>
          </div>
        ) : (
          filteredTasks.map((note) => <NoteItem key={note.id} note={note} deleteNote={deleteNote} />)
        )}
      </div>
    </div>
  );
};

export default NoteList;
