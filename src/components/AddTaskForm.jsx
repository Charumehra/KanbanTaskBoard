import React, { useState } from "react";
import { Plus, X, ChevronDown } from "lucide-react";

function AddTaskForm({ onAdd }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text, priority);
    setText("");
    setPriority("Low");
    setIsExpanded(false);
  };

  if (!isExpanded) {
    return (
      <button
        onClick={() => setIsExpanded(true)}
        className="group flex items-center justify-center gap-2 w-full p-3 mb-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300"
      >
        <Plus
          size={16}
          className="text-slate-400 group-hover:text-indigo-400"
        />
        <span className="text-xs font-bold text-slate-400 group-hover:text-indigo-400 tracking-widest uppercase">
          Add Mission
        </span>
      </button>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800 p-4 rounded-2xl shadow-2xl mb-6 border border-white/10 animate-in fade-in zoom-in duration-200"
    >
      <textarea
        autoFocus
        placeholder="Mission details..."
        className="w-full bg-transparent text-white text-sm outline-none resize-none min-h-15 placeholder:text-slate-600 font-medium"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/5">
        <div className="relative flex items-center">
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="appearance-none text-[9px] font-black uppercase tracking-widest border border-white/10 rounded-lg px-3 py-1 bg-slate-900 text-slate-400 outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            className="p-1 text-slate-500 hover:text-rose-400"
          >
            <X size={18} />
          </button>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-3 py-1 rounded-xl text-[10px] font-black uppercase hover:bg-indigo-700 transition-all"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
export default AddTaskForm;
