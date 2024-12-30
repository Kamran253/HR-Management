// src/components/EmployeeManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  "./EmployeeManagement.css"

const EmployeeManagement = () => {
    const [employees, setEmployees] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        salary: '',
        timings: '',
    });

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const response = await axios.get('http://localhost:5000/employees');
        setEmployees(response.data);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/employees', formData);
        fetchEmployees();
        setFormData({ name: '', email: '', salary: '', timings: '' });
    };

    return (
        <div>
            <h1>Employee Management</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="salary"
                    placeholder="Salary"
                    value={formData.salary}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="timings"
                    placeholder="Timings (e.g., 9 AM to 5 PM)"
                    value={formData.timings}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add Employee</button>
            </form>

            <h2>Employee List</h2>
            <ul>
                {employees.map((employee) => (
                    <li key={employee._id}>
                        {employee.name} - {employee.email} - {employee.salary} - {employee.timings}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeManagement;
