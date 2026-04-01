import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Trash2, GripVertical } from 'lucide-react';

function TaskCard({ task, setTasks }) {
  const { 
    attributes, 
    listeners, 
    setNodeRef, 
    transform, 
    transition, 
    isDragging 
  } = useSortable({ id: task.id });

  const style = { 
    transform: CSS.Transform.toString(transform), 
    transition,
    zIndex: isDragging ? 50 : 'auto'
  };

  const priorityStyles = {
    High: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    Medium: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    Low: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style}
      {...attributes} 
      {...listeners}
      
      className={`bg-slate-800/60 group rounded-2xl p-4 border border-white/5 hover:border-indigo-500/50 cursor-grab active:cursor-grabbing touch-none flex flex-col justify-between h-35 ${
        isDragging ? 'opacity-20 scale-95 ring-2 ring-indigo-500/50' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col gap-2 overflow-hidden">
        <div className="flex justify-between items-start shrink-0">
          <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-md border ${priorityStyles[task.priority]}`}>
            {task.priority}
          </span>
          
          <button 
            onPointerDown={(e) => e.stopPropagation()} 
            onClick={() => setTasks(p => p.filter(t => t.id !== task.id))}
            className="md:opacity-0 md:group-hover:opacity-100 opacity-40 text-slate-500 hover:text-rose-400 transition-all p-1"
          >
            <Trash2 size={16} />
          </button>
        </div>

        <p className="text-slate-200 text-sm font-medium leading-snug select-none line-clamp-3 overflow-hidden">
          {task.content}
        </p>
      </div>
      
      <div className="flex justify-end items-center md:opacity-30 opacity-100 shrink-0 pt-2">
         <GripVertical size={14} className="text-slate-500" />
      </div>
    </div>
  );
}

export default TaskCard;