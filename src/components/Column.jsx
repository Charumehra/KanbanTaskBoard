import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import TaskCard from "./TaskCard";
import AddTaskForm from "./AddTaskForm";

export default function Column({
  id,
  title,
  tasks,
  setTasks,
  onAdd,
  dotColor,
}) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className="flex flex-col h-full w-[85vw] md:w-auto shrink-0 bg-slate-900/40 ..."
    >
      <div className="flex items-center justify-between mb-8 shrink-0">
        <div className="flex items-center gap-3">
          <div
            className={`w-2 h-2 rounded-full ${dotColor} shadow-[0_0_12px_rgba(255,255,255,0.1)]`}
          ></div>
          <h2 className="text-slate-100 font-black text-xs uppercase tracking-[0.3em]">
            {title}
          </h2>
        </div>
        <span className="bg-indigo-500/10 text-indigo-400 text-[10px] px-2 py-1 rounded-lg font-bold border border-indigo-500/20">
          {tasks.length}
        </span>
      </div>

      {id === "todo" && <AddTaskForm onAdd={onAdd} />}

      <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
        <SortableContext
          items={tasks.map((t) => t.id)}
          strategy={verticalListSortingStrategy}
        >
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} setTasks={setTasks} />
          ))}
        </SortableContext>

        {tasks.length === 0 && (
          <div className="h-32 border-2 border-dashed border-white/5 rounded-2xl flex items-center justify-center text-slate-600 text-xs italic">
            Drop here
          </div>
        )}
      </div>
    </div>
  );
}
