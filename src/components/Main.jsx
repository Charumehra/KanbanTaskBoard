import React from 'react';

function Main({ children }) {
  return (
    <main className="flex-1 overflow-x-auto bg-slate-100">
      <div className="p-8 h-full min-w-max">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Development Sprint</h2>
          <p className="text-slate-500 text-sm">Manage your tasks and drag across columns to update status.</p>
        </div>
        
        <div className="flex gap-6 items-start">
          {children}
        </div>
      </div>
    </main>
  );
}
export default Main;