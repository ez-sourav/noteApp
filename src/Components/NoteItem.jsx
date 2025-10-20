
const NoteItem = ({ note, deleteNote }) => (
  <div
    className="flex justify-between flex-col items-start relative h-44 sm:h-48 md:h-52 rounded-2xl pt-8 sm:pt-9 pb-3 px-3 sm:px-4 text-black bg-cover bg-center bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
  >
    <div className="absolute top-2 right-3 sm:right-3 text-[9px] sm:text-[10px] text-gray-600 font-bold text-right px-1.5 py-0.5 rounded">
      <div>{note.date}</div>
      <div className="mt-0.5">{note.time}</div>
    </div>

    <div className="w-full overflow-y-auto flex-1 mb-2 pr-1">
      <h3 className="leading-tight text-base sm:text-lg font-bold capitalize break-words pr-16 sm:pr-20">
        {note.title}
      </h3>
      <p className="w-full first-letter:uppercase font-semibold text-xs sm:text-sm leading-tight mt-3 sm:mt-4 text-gray-600 break-words">
        {note.details}
      </p>
    </div>

    <button
      onClick={() => deleteNote(note.id)}
      className="w-full bg-red-500 py-1 text-xs rounded font-bold text-white active:scale-95 cursor-pointer m-[-3px] hover:bg-red-600 transition-colors"
    >
      Delete
    </button>
  </div>
);

export default NoteItem;
