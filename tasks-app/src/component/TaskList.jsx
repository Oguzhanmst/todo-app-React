import TaskItem from "./TaskItem";

function TaskList({ tasks, updateTaskStatus, deleteTask }) {
  const statuses = ["todo", "pending", "incontrol", "completed"];

  const TTelement = () => {
    tasks.map((task) => {
      console.log(task);
    });
  };

  TTelement();

  return (
    <div className="flex gap-[10px]">
      {statuses.map((status) => {
        return (
          <div
            key={status}
            className="flex items-center h-screen gap-[15px] w-full"
          >
            <div className="bg-[#111111] w-full h-screen rounded-2xl p-[10px] flex gap-[10px] flex-col">
              <div className="p-[5px] flex items-center gap-[10px]">
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
                <p className="text-white text-[12px]">{status.toUpperCase()}</p>
                <p className="text-[#717171] text-[12px]">
                  {tasks.filter((task) => task.status === status).length}
                </p>
              </div>

              <div className="listItem overflow-y-scroll">
                <div className="w-full rounded-xl flex flex-col gap-[10px]">
                  {tasks
                    .filter((task) => task.status === status)
                    .map((task) => {
                      {
                        /* tasklar bu kısıma gelecektir task itemler */
                      }
                      return (
                        <TaskItem
                          key={task.date}
                          tasks={task}
                          updateTaskStatus={updateTaskStatus}
                          deleteTask={deleteTask}
                        ></TaskItem>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;
