import { useState } from "react";

function TaskModal({ setShowModal, addTask }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedOption, setSelectedOption] = useState("Task Importance Level");

  const options = ["Low", "Middle", "High"]; // task important level

  const toggleDropdown = () => setIsOpen(true);

  //approve butonuna basıldığında eklenen işlemleri new task objesi ile addTaska eklemek
  const addNewTaskButton = (e) => {
    e.preventDefault();

    if (title.trim() == "" || description.trim() == "") {
      alert("lütfen işlemleri girmeden devam etmeyiniz");
      setShowModal(false);
      return;
    }

    //Task objem
    const newTask = {
      date: Date.now(),
      title: title,
      description: description,
      taskImportance: selectedOption,
      status: "todo",
    };

    addTask(newTask);
    setShowModal(false);
  };

  return (
    <div className="text-white w-xs bg-[#141414] rounded-md absolute top-[75px] right-[20px] z-40">
      <div className="text-white flex justify-between items-center text-[15px] p-[20px]">
        <h2>New Task</h2>
        <button onClick={() => setShowModal(false)}>X</button>
      </div>

      <div className="p-[15px] flex flex-col gap-3">
        <span className="text-[#FF453A] text-[12px] flex gap-1">
          <p className="text-white">Title</p>*
        </span>

        <input
          className="task-add-input w-full px-[10px] py-[8px] text-[12px]"
          type="text"
          placeholder="Task Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <span className="text-[#FF453A] text-[12px] flex gap-1">
          <p className="text-white">Description</p>*
        </span>

        <textarea
          className="task-add-input w-full px-[10px] py-[8px] text-[12px] border-1 border-[#232323] rounded-md"
          rows={5}
          placeholder="Task Description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button
          className="flex w-full justify-between items-center text-[12px] py-[8px] px-[10px] border-1 border-[#232323] rounded-md text-[#717171]"
          onClick={toggleDropdown}
        >
          {selectedOption}
          <img src="src/assets/icons/downArrow.png" alt="" />{" "}
        </button>

        {/* button tıklandığında açılır dropdown menü */}
        {isOpen && (
          <div className="absolute bottom-[-65px] w-48 rounded-md shadow-lg bg-[#141414]">
            <ul className="py-1">
              {options.map((option) => (
                <li
                  key={option}
                  onClick={() => {
                    setSelectedOption(option);
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 text-sm text-white hover:bg-[#202020] cursor-pointer"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          className="text-white text-[12px] text-center w-full bg-[#3478F7] rounded-md py-[8px]"
          onClick={addNewTaskButton}
        >
          Approve
        </button>
      </div>
    </div>
  );
}

export default TaskModal;
