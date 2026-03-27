# Mission: Kanban Pro 

A high-performance, dark-themed Kanban board built with **React**, **Vite**, and **@dnd-kit**. This project satisfies the "Level 3: Advanced" requirements, featuring full drag-and-drop functionality, real-time filtering, and persistent data storage.



## Features

### 🛠 Core Functionality 
- **Task Management:** Create, Edit, and Delete tasks with unique IDs.
- **Priority System:** Categorize tasks as `High`, `Medium`, or `Low` with dynamic color coding.
- **Persistent Storage:** All data is saved to `localStorage`, so your board stays exactly as you left it after a refresh.

### 🏆 Advanced Features
- **Fluid Drag & Drop:** Move cards between columns (To Do, In Progress, Done) or reorder them within a single column using `@dnd-kit`.
- **Global Search:** Instant real-time filtering of cards across all partitions.
- **Responsive Layout:** A grid-based partitioned UI that remains symmetrical on desktops and stacks vertically on mobile devices.
- **Full-Card Access:** The entire card acts as a drag handle, optimized with `PointerSensors` to distinguish between clicks and drags.

##  Tech Stack

- **Framework:** React 18 (Vite)
- **Styling:** Tailwind CSS
- **Drag & Drop:** @dnd-kit (Core, Sortable, Utilities)
- **Icons:** Lucide-React
- **State Management:** React Hooks (`useState`, `useEffect`)

