import Tasks from "./components/Tasks"; // Corrigido: importação correta do componente Tasks
import AddTask from "./components/AddTask"; // Corrigido: importação correta do componente AddTask
import { useEffect, useState } from "react"; // Corrigido: importação correta do hook useState
import MyTimer from "./components/MyTimer"; // Corrigido: importação correta do componente MyTimer

function App() {
  const [tasks, setTasks] = useState([
    JSON.parse(localStorage.getItem("tasks")) || [],
  ]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskClick(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center p-6">
      <div className="w-[500px] space-y-5 ">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskClick={onAddTaskClick} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
        <MyTimer />

        {/* só pode retornar um elemento (uma div por ex)*/}
      </div>
    </div>
  );
}

export default App;
