function TaskItem({ tasks, updateTaskStatus, deleteTask }) {
  const statuses = ["todo", "pending", "incontrol", "completed"];
  const availableNextStatuses = statuses.filter((s) => s !== tasks.status);

  return (
    <div className="p-[15px] flex flex-col gap-[10px] bg-[#1C1C1C] rounded-xl">
      {/* Title-Delete Button */}
      <div className="flex justify-between">
        <p className="text-[12px] text-white">{tasks.title}</p>
        <button
          className="w-[22px] h-[22px] bg-[#141414] flex items-center justify-center rounded-full"
          onClick={() => deleteTask(tasks.title)}
        >
          <img src="src/assets/icons/trash.png" alt="" />
        </button>
      </div>
      {/* Description */}
      <p className="w-full text-[#717171] text-[10px]">{tasks.description}</p>
      {/* Line */}
      <div className="w-full border-1 border-[#232323]"></div>
      {/* Date-Important Level */}
      <div className="w-full flex justify-between">
        <span className="flex gap-[5px] items-center">
          <img src="src/assets/icons/flag.png" alt="" />
          <p className="text-[#717171] text-[10px]">
            {new Date(tasks.date).toLocaleDateString()} -{" "}
            {new Date(tasks.date).toLocaleTimeString()}
          </p>
        </span>

        {tasks.taskImportance === "Low" ? (
          <div className="text-[#30D158] text-[10px] px-[8px] py-[2px] bg-[#14301B] rounded-xs">
            {tasks.taskImportance}
          </div>
        ) : tasks.taskImportance === "Middle" ? (
          <div className="text-[#FF9F0A] text-[10px] px-[8px] py-[2px] bg-[#38280E] rounded-xs">
            {tasks.taskImportance}
          </div>
        ) : (
          <div className="text-[#FF453A] text-[10px] px-[8px] py-[2px] bg-[#291A1D] rounded-xs">
            {tasks.taskImportance}
          </div>
        )}
      </div>
      {/* Status Buttons */}
      <div className="flex gap-[10px]">
        {availableNextStatuses.map((status) => (
          <div
            key={status}
            className="py-[5px] px-[10px] flex items-center gap-[10px]  border-1 border-[#232323] rounded-md"
            onClick={() => updateTaskStatus(tasks.title, status)}
          >
            {/* task item içerisindeki buttonların gelen statusune göre renklerini atama  */}
            <div
              className={`circle w-[8px] h-[8px] rounded-full ${
                status === "pending"
                  ? "bg-[#E168F9]"
                  : status === "incontrol"
                  ? "bg-[#F98368]"
                  : status === "completed"
                  ? "bg-[#68F9A2]"
                  : "bg-[#F9C068]"
              }`}
            ></div>
            <p className="text-white text-[12px]">{status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskItem;
