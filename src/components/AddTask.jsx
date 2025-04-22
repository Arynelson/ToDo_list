import { useState } from "react";
import PropTypes from "prop-types";

export default function AddTask({ onAddTaskClick }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 shadow-md flex-col bg-slate-200 rounded-md gap-6">
      <input
        type="text"
        placeholder="Título da tarefa"
        className="w-full p-2
        rounded-md bg-slate-100 text-slate-900 placeholder:text-slate-500
        focus:outline-none focus:ring-2 focus:ring-slate-500"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        type="text"
        placeholder="Descrição da tarefa"
        className="w-full p-2
        rounded-md bg-slate-100 text-slate-900 placeholder:text-slate-500
        focus:outline-none focus:ring-2 focus:ring-slate-500"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => {
          onAddTaskClick(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-600 text-slate-100 px-5 py-3 p-2 rounded-md hover:bg-slate-400 w-full"
        disabled={!title || !description}
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

AddTask.propTypes = {
  onAddTaskClick: PropTypes.func.isRequired,
};
