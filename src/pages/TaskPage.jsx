import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TaskPage() {
    const navigate = useNavigate();
    const [SearchParams] = useSearchParams();
    // const taskId = SearchParams.get("id");
    const taskTitle = SearchParams.get("title");
    const taskDescription = SearchParams.get("description");
   
  return (
    <div className="w-screen h-screen bg-slate-900 flex space-y-8 justify-center p-6">
      <div className="w-[500px] h-[400px] p-6 shadow-md bg-slate-600 rounded-md space-y-6">
        <h1 className="text-3xl  text-slate-100 font-bold text-center">{taskTitle}</h1>
        <div className=" justify-center flex-col p-6 shadow-md space-y-3 bg-slate-700 rounded-md  items-center gap-2">
        <h2 className="text-2xl text-slate-300 font-bold text-center">Detalhes da tarefa:</h2>
        <p className="text-slate-100 text-center">{taskDescription}</p>
        <button onClick={() => navigate(-1)} className="bg-orange-400 text-black font bold px-5 py-3 p-2 rounded-md hover:bg-orange-200 w-full">
          Voltar para a lista de tarefas
        </button>
        </div>
    
    </div>
    </div>
  );
}

export default TaskPage;