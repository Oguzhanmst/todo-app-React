import "./App.css";
import Navbar from "./component/Navbar";
import TaskList from "./component/TaskList";
import TaskModal from "./component/TaskModal";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  //Arama yapmak için
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  //sadece sayfa yenilendiğinde bir kere çalıştırıyoruz.
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  //Tasks da her değişiklik olduğunda çalıştırıyoruz.
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTaskStatus = (title, status) => {
    setTasks(
      tasks.map((task) => (task.title === title ? { ...task, status } : task))
    );
  };

  const deleteTask = (title) => {
    const filteredTask = tasks.filter((task) => task.title !== title);
    setTasks(filteredTask);
  };

  const searchTask = (search) => {
    if (search.trim() === "") {
      setIsSearching(false);
      setSearchResults([]);
    } else {
      const searchTask = tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(search.toLowerCase()) ||
          task.description.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResults(searchTask);
      setIsSearching(true);
    }
  };

  console.log(tasks);

  return (
    <div className="max-w-[2100px]">
      <Navbar setShowModal={setShowModal} searchTask={searchTask} />
      <TaskList
        tasks={isSearching ? searchResults : tasks}
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
      />
      {showModal && <TaskModal setShowModal={setShowModal} addTask={addTask} />}
    </div>
  );
}

export default App;
