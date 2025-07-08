import React from "react";
import { Clock } from "lucide-react";

const EmptyState = ({ filter }) => {
  const getMessage = () => {
    switch (filter) {
      case "completed":
        return "No completed tasks yet. Keep working!";
      case "pending":
        return "No pending tasks. Great job!";
      case "high":
        return "No high priority tasks right now.";
      case "medium":
        return "No medium priority tasks.";
      case "low":
        return "No low priority tasks.";
      default:
        return "No tasks yet. Add your first task above!";
    }
  };

  return (
    <div className="text-center py-12">
      <div className="text-gray-400 mb-4">
        <Clock size={48} className="mx-auto" />
      </div>
      <p className="text-gray-600 text-lg">{getMessage()}</p>
    </div>
  );
};

export default EmptyState;
