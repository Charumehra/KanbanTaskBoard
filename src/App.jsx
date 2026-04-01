import React, { useState, useEffect } from "react";
import {
  DndContext,
  closestCorners,
  PointerSensor,
  useSensor,
  useSensors,
  TouchSensor,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import Header from "./components/Header";
import Column from "./components/Column";

const COLUMNS = [
  { id: "todo", title: "To Do", color: "bg-rose-500" },
  { id: "in-progress", title: "In Progress", color: "bg-amber-500" },
  { id: "done", title: "Done", color: "bg-emerald-500" },
];

function App() {
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("kanban-v3")) || [],
  );
  const [searchQuery, setSearchQuery] = useState("");

  const sensors = useSensors(
  useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10, 
    },
  }),
  useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5, 
    },
  })
);

  useEffect(() => {
    localStorage.setItem("kanban-v3", JSON.stringify(tasks));
  }, [tasks]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    setTasks((prev) => {
      const activeTask = prev.find((t) => t.id === active.id);
      const isColumn = COLUMNS.some((c) => c.id === over.id);

      if (isColumn) {
        return prev.map((t) =>
          t.id === active.id ? { ...t, status: over.id } : t,
        );
      }

      const overTask = prev.find((t) => t.id === over.id);
      if (overTask && activeTask.status !== overTask.status) {
        return prev.map((t) =>
          t.id === active.id ? { ...t, status: overTask.status } : t,
        );
      }

      return arrayMove(prev, prev.indexOf(activeTask), prev.indexOf(overTask));
    });
  };

  const filteredTasks = tasks.filter((t) =>
    t.content.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 flex flex-col font-sans selection:bg-indigo-500/30">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main className="flex-1 p-4 md:p-10 overflow-x-auto overflow-y-hidden bg-[#020617] custom-scrollbar">
  <DndContext
    sensors={sensors}
    collisionDetection={closestCorners}
    onDragEnd={handleDragEnd}
  >
    <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 h-full max-w-7xl mx-auto items-start md:items-stretch pb-4">
      {COLUMNS.map((col) => (
        <div 
          key={col.id} 
          className="w-[85vw] min-w-70 md:w-full h-full shrink-0"
        >
          <Column
            id={col.id}
            title={col.title}
            dotColor={col.color}
            tasks={filteredTasks.filter((t) => t.status === col.id)}
            setTasks={setTasks}
            onAdd={(content, priority) =>
              setTasks([
                ...tasks,
                {
                  id: crypto.randomUUID(),
                  content,
                  priority,
                  status: "todo",
                },
              ])
            }
          />
        </div>
      ))}
    </div>
  </DndContext>
</main>
    </div>
  );
}
export default App;
