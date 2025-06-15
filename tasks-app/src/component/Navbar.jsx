function Navbar({ setShowModal, searchTask }) {
  return (
    <div>
      <div className="px-[20px] py-[20px] flex justify-between items-center text-[15px]">
        {/* Navbar Logo And Name */}
        <h3 className="text-white">Task Management App</h3>
        {/* Navbar Search Input */}
        <input
          className="search-input text-white text-center bg-[#111111] px-[80px] py-[5px] rounded-md"
          type="text"
          placeholder="Search in Tasks"
          onChange={(e) => searchTask(e.target.value)}
        />
        {/* Navbar New Create Task Button */}
        <button
          className="text-white text-center bg-[#3478F7] rounded-md px-[20px] py-[5px]"
          onClick={() => setShowModal(true)}
        >
          Create New Task
        </button>
      </div>
    </div>
  );
}

export default Navbar;
