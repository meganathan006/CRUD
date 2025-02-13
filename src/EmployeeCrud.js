import React, { useState } from "react";
import './styles.css'; // Import the CSS file

const EmployeeCrud = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ name: "", age: "", salary: "", domain: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only allow numeric input for age and salary
    if (name === "age" || name === "salary") {
      if (/^\d*$/.test(value)) { // Ensure only digits are entered
        setForm({ ...form, [name]: value });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
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
    <div className="container">
      <h2>CRUD App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text" // Change input type to text for age
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          required
        />
        <input
          type="text" // Change input type to text for salary
          name="salary"
          placeholder="Salary"
          value={form.salary}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="domain"
          placeholder="Domain"
          value={form.domain}
          onChange={handleChange}
          required
        />
        <button type="submit">
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Domain</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.salary}</td>
              <td>{item.domain}</td>
              <td>
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500"
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

export default EmployeeCrud;
