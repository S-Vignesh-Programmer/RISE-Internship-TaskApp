// Constants for the Todo app

// Priority levels
export const PRIORITY_LEVELS = {
  HIGH: "high",
  MEDIUM: "medium",
  LOW: "low",
};

// Filter types
export const FILTER_TYPES = {
  ALL: "all",
  COMPLETED: "completed",
  PENDING: "pending",
  HIGH: "high",
  MEDIUM: "medium",
  LOW: "low",
};

// Local storage keys
export const STORAGE_KEYS = {
  TASKS: "todo-tasks",
  FILTER: "todo-filter",
  SETTINGS: "todo-settings",
};

// Default task structure
export const DEFAULT_TASK = {
  id: null,
  text: "",
  completed: false,
  priority: PRIORITY_LEVELS.MEDIUM,
  createdAt: null,
  updatedAt: null,
};

// Animation durations (in milliseconds)
export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
};

// Priority colors
export const PRIORITY_COLORS = {
  [PRIORITY_LEVELS.HIGH]: {
    text: "text-red-600",
    bg: "bg-red-100",
    border: "border-red-500",
    badge: "bg-red-100 text-red-800",
  },
  [PRIORITY_LEVELS.MEDIUM]: {
    text: "text-yellow-600",
    bg: "bg-yellow-100",
    border: "border-yellow-500",
    badge: "bg-yellow-100 text-yellow-800",
  },
  [PRIORITY_LEVELS.LOW]: {
    text: "text-gray-600",
    bg: "bg-gray-100",
    border: "border-gray-500",
    badge: "bg-gray-100 text-gray-800",
  },
};

// Filter labels and descriptions
export const FILTER_CONFIG = {
  [FILTER_TYPES.ALL]: {
    label: "All Tasks",
    description: "Show all tasks",
    icon: "Filter",
  },
  [FILTER_TYPES.PENDING]: {
    label: "Pending",
    description: "Show incomplete tasks",
    icon: "Clock",
  },
  [FILTER_TYPES.COMPLETED]: {
    label: "Completed",
    description: "Show completed tasks",
    icon: "CheckCircle",
  },
  [FILTER_TYPES.HIGH]: {
    label: "High Priority",
    description: "Show high priority tasks",
    icon: "Star",
  },
  [FILTER_TYPES.MEDIUM]: {
    label: "Medium Priority",
    description: "Show medium priority tasks",
    icon: "Circle",
  },
  [FILTER_TYPES.LOW]: {
    label: "Low Priority",
    description: "Show low priority tasks",
    icon: "Minus",
  },
};

// App settings
export const APP_SETTINGS = {
  AUTO_SAVE_DELAY: 100, // milliseconds
  MAX_TASK_LENGTH: 500,
  ITEMS_PER_PAGE: 50,
};

// Error messages
export const ERROR_MESSAGES = {
  TASK_TOO_LONG: `Task text cannot exceed ${APP_SETTINGS.MAX_TASK_LENGTH} characters`,
  TASK_EMPTY: "Task text cannot be empty",
  SAVE_ERROR: "Failed to save task. Please try again.",
  LOAD_ERROR: "Failed to load tasks. Please refresh the page.",
  DELETE_ERROR: "Failed to delete task. Please try again.",
  INVALID_PRIORITY: "Invalid priority level selected",
};

// Success messages
export const SUCCESS_MESSAGES = {
  TASK_ADDED: "Task added successfully",
  TASK_UPDATED: "Task updated successfully",
  TASK_DELETED: "Task deleted successfully",
  TASK_COMPLETED: "Task marked as completed",
  TASK_UNCOMPLETED: "Task marked as pending",
  DATA_EXPORTED: "Tasks exported successfully",
  DATA_IMPORTED: "Tasks imported successfully",
};
