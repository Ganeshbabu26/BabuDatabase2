import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Form = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Password: '',
    Email: '',
    Department: '',
    City: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    try {
      const res = await axios.post("/submit", formData);
      alert(res.data.message);
    } catch (err) {
      alert("Error submitting data");
      console.error(err);
    }
  }

  return (
    <div className="container mt-5">
      <h1 className='text-success mb-4'>Student Details</h1>
      <div className="col-md-6 col-lg-6">
      <form onSubmit={handleSubmit} className='border p-4 rounded bg-light'>
        <input
          type="text"
          name="Name"
          placeholder="Enter your name"
          className="form-control mb-3"
          value={formData.Name}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="Password"
          placeholder="Enter your password"
          className="form-control mb-3"
          value={formData.Password}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="Email"
          placeholder="Enter your email"
          className="form-control mb-3"
          value={formData.Email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="Department"
          placeholder="Enter your department"
          className="form-control mb-3"
          value={formData.Department}
          onChange={handleChange}
        />

        <input
          type="text"
          name="City"
          placeholder="Enter your city"
          className="form-control mb-3"
          value={formData.City}
          onChange={handleChange}
        />
        <div className='con'>
        <div className='Border'></div>
        <button type="submit" className='btn btn-success'>Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
};
