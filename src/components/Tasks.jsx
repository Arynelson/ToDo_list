import { ChevronRight, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function Tasks(props) {
Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  onDeleteTaskClick: PropTypes.func.isRequired,
};
  const navigate = useNavigate();

  function onSeeDatailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 shadow-md bg-slate-200 rounded-md">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-3">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`text-left w-full bg-slate-700 text-slate-100 p-2 rounded-md hover:bg-slate-600 ${
              task.isCompleted ? "line-through" : ""
            }`}
          >
            <h1 className="text-slate-100 font-bold">{task.title}</h1>
          </button>

          <button onClick={()=> onSeeDatailsClick(task)} className="bg-slate-600 text-slate-100 p-2 rounded-md hover:bg-slate-400">
            <ChevronRight className="text-slate-200" size={20} />
          </button>
          <button
            onClick={() => props.onDeleteTaskClick(task.id)}
            className="bg-slate-600 text-slate-100 p-2 rounded-md hover:bg-slate-400"
          >
            <Trash2Icon className="text-slate-200" size={20} />
          </button>
        </li>
      ))}
    </ul>
  );
}
