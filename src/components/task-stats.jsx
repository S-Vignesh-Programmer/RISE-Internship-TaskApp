import React from "react";

const TaskStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      <div
        className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-4 
      text-center border border-white border-opacity-30 hover:scale-110 transition-all duration-200 hover:shadow-2xl/20"
      >
        <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
        <div className="text-sm text-gray-600">Total</div>
      </div>
      <div
        className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-4 text-center 
      border border-white border-opacity-30 hover:scale-110 transition-all duration-200 hover:shadow-2xl/20"
      >
        <div className="text-2xl font-bold text-green-600">
          {stats.completed}
        </div>
        <div className="text-sm text-gray-600">Completed</div>
      </div>
      <div
        className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-4 text-center 
       border border-white border-opacity-30 hover:scale-110 transition-all duration-200 hover:shadow-2xl/20"
      >
        <div className="text-2xl font-bold text-orange-600">
          {stats.pending}
        </div>
        <div className="text-sm text-gray-600">Pending</div>
      </div>
      <div
        className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-4 text-center 
      border border-white border-opacity-30 hover:scale-110 transition-all duration-200 hover:shadow-2xl/20"
      >
        <div className="text-2xl font-bold text-red-600">{stats.high}</div>
        <div className="text-sm text-gray-600">High</div>
      </div>
      <div
        className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-4 text-center 
      border border-white border-opacity-30 hover:scale-110 transition-all duration-200 hover:shadow-2xl/20"
      >
        <div className="text-2xl font-bold text-yellow-600">{stats.medium}</div>
        <div className="text-sm text-gray-600">Medium</div>
      </div>
      <div
        className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-4 text-center 
      border border-white border-opacity-30 hover:scale-110 transition-all duration-200 hover:shadow-2xl/20"
      >
        <div className="text-2xl font-bold text-gray-600">{stats.low}</div>
        <div className="text-sm text-gray-600">Low</div>
      </div>
    </div>
  );
};

export default TaskStats;
