"use client"
import { useState } from "react";
import Button from '@mui/material/Button';

export default function Home() {
  const [formData, setFormData] = useState(String(Date.now()));

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { data, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [data]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData((prevSubmittedData) => [...prevSubmittedData, formData]);
    setFormData({ data: ""});
  };

  return (
    <div>
      <h1>Next.js Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">DATA:</label>
          <input
            type="text"
            id="data"
            name="data"
            value={formData.data}
            onChange={handleChange}
          />
        </div>
    
        <Button type="subbmit" variant="contained">SUBBMIT</Button>
      </form>

      <h2>Submitted Data:</h2>
      <ul>
        {submittedData.map((data, index) => (
          <li key={index}>
            Name: {String(data.data)}
          </li>
        ))}
      </ul>
    </div>
  );
}