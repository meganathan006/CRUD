import React, { useState } from "react";

const EmployeeCrud = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ name: "", age: "", salary: "", domain: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(e)
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedData = [...data];
      updatedData[editIndex] = form;
      setData(updatedData);
      setEditIndex(null);
    } else {
      setData([...data, form]);
    }
    setForm({ name: "", age: "", salary: "", domain: "" });
  };

  const handleEdit = (index) => {
    setForm(data[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-bold mb-4">CRUD App</h2>
      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="age" placeholder="Age" value={form.age} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="salary" placeholder="Salary" value={form.salary} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="domain" placeholder="Domain" value={form.domain} onChange={handleChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{editIndex !== null ? "Update" : "Add"}</button>
      </form>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Salary</th>
            <th className="border p-2">Domain</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center border">
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.age}</td>
              <td className="border p-2">{item.salary}</td>
              <td className="border p-2">{item.domain}</td>
              <td className="border p-2">
                <button onClick={() => handleEdit(index)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                <button onClick={() => handleDelete(index)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeCrud;