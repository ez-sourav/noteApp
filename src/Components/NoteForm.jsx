
const NoteForm = ({ title, setTitle, details, setDetails, submitHandler }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      submitHandler();
    }
  };

  return (
    <div className="flex items-start w-full lg:w-1/2 gap-3 sm:gap-4 text-lg sm:text-xl md:text-2xl flex-col p-4 sm:p-6 md:p-8 lg:p-10 lg:h-screen lg:overflow-auto">
      <h1 className="text-2xl sm:text-3xl font-bold">Add Notes</h1>

      <input
        autoComplete="off"
        className="px-4 py-2 sm:px-5 sm:py-3 capitalize w-full rounded border-2 border-white font-medium outline-none text-base sm:text-lg text-black bg-white"
        type="text"
        placeholder="Enter Your Notes Heading"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyPress}
      />

      <textarea
        className="px-4 py-2 sm:px-5 sm:py-3 capitalize w-full rounded border-2 border-white h-24 sm:h-32 font-medium outline-none text-base sm:text-lg resize-none text-black bg-white"
        placeholder="Write Details Here"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        onKeyDown={handleKeyPress}
      />

      <button
        onClick={submitHandler}
        className="px-4 py-2 sm:px-5 sm:py-3 w-full active:scale-95 font-medium rounded cursor-pointer bg-white text-black text-base sm:text-lg hover:bg-gray-100 transition-colors"
      >
        Add Note
      </button>

      <p className="text-xs sm:text-sm text-gray-400 mt-2">
        Tip: Press Ctrl + Enter to quickly add a note
      </p>
    </div>
  );
};

export default NoteForm;
