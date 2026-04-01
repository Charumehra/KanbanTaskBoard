import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import TaskCard from "./TaskCard";
import AddTaskForm from "./AddTaskForm";

export default function Column({ id, title, tasks, setTasks, onAdd, dotColor }) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      
      className="flex flex-col w-full h-fit min-h-50 bg-slate-900/40 backdrop-blur-md rounded-3xl border border-white/5 p-6 shadow-xl"
    >
      <div className="flex items-center justify-between mb-8 shrink-0">
        <div className="flex items-center gap-3">
          <div className={`w-2 h-2 rounded-full ${dotColor}`}></div>
          <h2 className="text-slate-100 font-black text-xs uppercase tracking-[0.3em]">
            {title}
          </h2>
        </div>
        <span className="bg-indigo-500/10 text-indigo-400 text-[10px] px-2 py-1 rounded-lg font-bold border border-indigo-500/20">
          {tasks.length}
        </span>
      </div>

      {id === "todo" && <AddTaskForm onAdd={onAdd} />}

      <div className="space-y-4">
        <SortableContext
          items={tasks.map((t) => t.id)}
          strategy={verticalListSortingStrategy}
        >
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} setTasks={setTasks} />
          ))}
        </SortableContext>

        {tasks.length === 0 && (
          <div className="h-24 border-2 border-dashed border-white/5 rounded-2xl flex items-center justify-center text-slate-600 text-xs italic">
            Empty Column
          </div>
        )}
      </div>
    </div>
  );
}