import React, { useState, useEffect } from "react";

const EmployeeForm = ({ selectedEmployee, onSave }) => {
  const [employee, setEmployee] = useState({
    username: "",
    email: "",
    status: "active",
  });

  useEffect(() => {
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.username && employee.email) {
      onSave(employee);
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg space-y-6 border border-gray-200"
    >
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-teal-700"
        >
          Username:
        </label>
        <input
          id="username"
          type="text"
          name="username"
          value={employee.username}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-4 py-2 border border-teal-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-teal-700">
          Email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-4 py-2 border border-teal-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="status"
          className="block text-sm font-medium text-teal-700"
        >
          Status:
        </label>
        <select
          id="status"
          name="status"
          value={employee.status}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-4 py-2 border border-teal-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div className="text-right">
        <button
          type="submit"
          className="px-5 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
