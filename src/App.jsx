import React, { useState, useEffect } from "react";
import { useTasks } from "./hooks/use-task";
import TaskForm from "./components/task-form";
import TaskStats from "./components/task-stats";
import TaskFilters from "./components/task-filter";
import TaskItem from "./components/task-item";
import EmptyState from "./components/empty-state";

export default function App() {
  const {
    tasks,
    filter,
    setFilter,
    taskStats,
    addTask,
    deleteTask,
    toggleComplete,
    editTask,
  } = useTasks();

  // Show persistence status
  const [lastSaved, setLastSaved] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setLastSaved(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, [tasks]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="w-full max-w-4xl mx-auto px-4 py-6 sm:px-6 sm:py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Task Manager
          </h1>
          <p>Stay organized and productive with automatic saving</p>
        </header>

        {/* Main Content */}
        <main className="space-y-6">
          {/* Stats */}
          <section>
            <TaskStats stats={taskStats} />
          </section>

          {/* Task Form */}
          <section className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white border-opacity-30">
            <TaskForm onAddTask={addTask} />
          </section>

          {/* Filters */}
          <section>
            <TaskFilters
              filter={filter}
              onFilterChange={setFilter}
              stats={taskStats}
            />
          </section>

          {/* Tasks List */}
          <section className="bg-white bg-opacity-50 backdrop-blur-sm rounded-xl border border-white border-opacity-30 overflow-hidden">
            {tasks.length === 0 ? (
              <div className="p-8">
                <EmptyState filter={filter} />
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                <div className="px-6 py-4 bg-gray-50 bg-opacity-50">
                  <div className="flex items-center justify-between text-sm font-medium text-gray-600 uppercase tracking-wide">
                    <span>Tasks ({tasks.length})</span>
                    <span>Actions</span>
                  </div>
                </div>

                <div className="max-h-[60vh] overflow-y-auto">
                  {tasks.map((task) => (
                    <TaskItem
                      key={task.id}
                      task={task}
                      onToggleComplete={toggleComplete}
                      onDelete={deleteTask}
                      onEdit={editTask}
                    />
                  ))}
                </div>
              </div>
            )}
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-70 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-white border-opacity-20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600 font-medium">
              All changes saved automatically
            </span>
          </div>
        </footer>
      </div>

      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  );
}
