import React from "react";
import { Filter, Clock, CheckCircle, Star } from "lucide-react";

const TaskFilters = ({ filter, onFilterChange, stats }) => {
  const filters = [
    { value: "all", label: "All Tasks", count: stats.total, icon: Filter },
    { value: "pending", label: "Pending", count: stats.pending, icon: Clock },
    {
      value: "completed",
      label: "Completed",
      count: stats.completed,
      icon: CheckCircle,
    },
    { value: "high", label: "High Priority", count: stats.high, icon: Star },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map(({ value, label, count, icon: Icon }) => (
        <button
          key={value}
          onClick={() => onFilterChange(value)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
            filter === value
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-white bg-opacity-70 backdrop-blur-sm text-gray-700 hover:bg-opacity-90 border border-white border-opacity-30"
          }`}
        >
          <Icon size={16} />
          <span className="font-medium">{label}</span>
          <span className="text-xs bg-black text-white bg-opacity-20 px-2 py-1 rounded-full">
            {count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TaskFilters;
