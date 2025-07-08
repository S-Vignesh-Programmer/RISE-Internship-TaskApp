// Utility functions for the Todo app

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const formatRelativeTime = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  if (diffInSeconds < 60) return "just now";
  if (diffInSeconds < 3600)
    return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 2592000)
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  return formatDate(dateString);
};

export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const getPriorityColor = (priority) => {
  switch (priority) {
    case "high":
      return "text-red-600";
    case "medium":
      return "text-yellow-600";
    case "low":
      return "text-gray-600";
    default:
      return "text-gray-600";
  }
};

export const getPriorityBgColor = (priority) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "low":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const sortTasks = (tasks) => {
  const priorityOrder = { high: 3, medium: 2, low: 1 };

  return tasks.sort((a, b) => {
    // First sort by completion status (incomplete first)
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }

    // Then by priority (high to low)
    if (a.priority !== b.priority) {
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }

    // Finally by creation date (newest first)
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
};

export const filterTasks = (tasks, filter) => {
  switch (filter) {
    case "completed":
      return tasks.filter((task) => task.completed);
    case "pending":
      return tasks.filter((task) => !task.completed);
    case "high":
      return tasks.filter((task) => task.priority === "high");
    case "medium":
      return tasks.filter((task) => task.priority === "medium");
    case "low":
      return tasks.filter((task) => task.priority === "low");
    default:
      return tasks;
  }
};

export const calculateTaskStats = (tasks) => {
  return {
    total: tasks.length,
    completed: tasks.filter((task) => task.completed).length,
    pending: tasks.filter((task) => !task.completed).length,
    high: tasks.filter((task) => task.priority === "high").length,
    medium: tasks.filter((task) => task.priority === "medium").length,
    low: tasks.filter((task) => task.priority === "low").length,
    completionRate:
      tasks.length > 0
        ? Math.round(
            (tasks.filter((task) => task.completed).length / tasks.length) * 100
          )
        : 0,
  };
};

export const validateTask = (task) => {
  return (
    task &&
    typeof task.text === "string" &&
    task.text.trim().length > 0 &&
    ["high", "medium", "low"].includes(task.priority) &&
    typeof task.completed === "boolean"
  );
};

export const exportTasks = (tasks) => {
  const exportData = {
    tasks,
    exportDate: new Date().toISOString(),
    version: "1.0",
  };
  return JSON.stringify(exportData, null, 2);
};

export const importTasks = (jsonString) => {
  try {
    const data = JSON.parse(jsonString);
    if (data.tasks && Array.isArray(data.tasks)) {
      return data.tasks.filter(validateTask);
    }
    return [];
  } catch (error) {
    console.error("Error importing tasks:", error);
    return [];
  }
};
