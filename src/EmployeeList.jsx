import React from "react";

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200 bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
            <th className="p-4 border-b">#</th>
            <th className="p-4 border-b">Username</th>
            <th className="p-4 border-b">Email</th>
            <th className="p-4 border-b">Status</th>
            <th className="p-4 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr
              key={emp.id}
              className="hover:bg-gray-50 transition duration-200"
            >
              <td className="p-4 border-b text-gray-700">{index + 1}</td>
              <td className="p-4 border-b text-gray-700">{emp.username}</td>
              <td className="p-4 border-b text-gray-700">{emp.email}</td>
              <td
                className={`p-4 border-b ${
                  emp.status === "Active"
                    ? "text-green-600 font-semibold"
                    : "text-red-600 font-semibold"
                }`}
              >
                {emp.status}
              </td>
              <td className="p-4 border-b text-center">
                <button
                  onClick={() => onEdit(emp)}
                  className="mr-2 px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-150"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(emp.id)}
                  className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 transition duration-150"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
