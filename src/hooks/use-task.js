import { useCallback } from "react";
import { useStorage } from "./use-storage";

// Task management hook
export const useTasks = () => {
  const [tasks, setTasks] = useStorage("todo-tasks", []);
  const [filter, setFilter] = useStorage("todo-filter", "all");

  const addTask = useCallback(
    (text, priority = "medium") => {
      if (!text.trim()) return;

      const newTask = {
        id: Date.now() + Math.random(),
        text: text.trim(),
        completed: false,
        priority,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks, newTask];
        // Force immediate save
        try {
          window.localStorage.setItem(
            "todo-tasks",
            JSON.stringify(updatedTasks)
          );
        } catch (error) {
          console.error("Error force saving task:", error);
        }
        return updatedTasks;
      });
    },
    [setTasks]
  );

  const deleteTask = useCallback(
    (id) => {
      setTasks((prevTasks) => {
        const updatedTasks = prevTasks.filter((task) => task.id !== id);
        // Force immediate save
        try {
          window.localStorage.setItem(
            "todo-tasks",
            JSON.stringify(updatedTasks)
          );
        } catch (error) {
          console.error("Error force saving after delete:", error);
        }
        return updatedTasks;
      });
    },
    [setTasks]
  );

  const toggleComplete = useCallback(
    (id) => {
      setTasks((prevTasks) => {
        const updatedTasks = prevTasks.map((task) =>
          task.id === id
            ? {
                ...task,
                completed: !task.completed,
                updatedAt: new Date().toISOString(),
              }
            : task
        );
        // Force immediate save
        try {
          window.localStorage.setItem(
            "todo-tasks",
            JSON.stringify(updatedTasks)
          );
        } catch (error) {
          console.error("Error force saving after toggle:", error);
        }
        return updatedTasks;
      });
    },
    [setTasks]
  );

  const editTask = useCallback(
    (id, newText) => {
      if (!newText.trim()) return;

      setTasks((prevTasks) => {
        const updatedTasks = prevTasks.map((task) =>
          task.id === id
            ? {
                ...task,
                text: newText.trim(),
                updatedAt: new Date().toISOString(),
              }
            : task
        );
        // Force immediate save
        try {
          window.localStorage.setItem(
            "todo-tasks",
            JSON.stringify(updatedTasks)
          );
        } catch (error) {
          console.error("Error force saving after edit:", error);
        }
        return updatedTasks;
      });
    },
    [setTasks]
  );

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case "completed":
        return task.completed;
      case "pending":
        return !task.completed;
      case "high":
        return task.priority === "high";
      case "medium":
        return task.priority === "medium";
      case "low":
        return task.priority === "low";
      default:
        return true;
    }
  });

  const taskStats = {
    total: tasks.length,
    completed: tasks.filter((task) => task.completed).length,
    pending: tasks.filter((task) => !task.completed).length,
    high: tasks.filter((task) => task.priority === "high").length,
    medium: tasks.filter((task) => task.priority === "medium").length,
    low: tasks.filter((task) => task.priority === "low").length,
  };

  return {
    tasks: filteredTasks,
    allTasks: tasks,
    filter,
    setFilter,
    taskStats,
    addTask,
    deleteTask,
    toggleComplete,
    editTask,
  };
};
