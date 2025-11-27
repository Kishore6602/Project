import React, { useState } from "react";
<<<<<<< HEAD
import "./styles.css";
=======
>>>>>>> ebeff5ed88c4400acae952dc4878cc8c32222d3c

function AddCar() {
  const [car, setCar] = useState({
    name: "",
    brand: "",
    price: "",
    available: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCar({
      ...car,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(car),
      });
      if (response.ok) {
        alert("✅ Car added successfully!");
        setCar({ name: "", brand: "", price: "", available: true });
      } else {
        alert("❌ Failed to add car!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Server not responding");
    }
  };

  return (
<<<<<<< HEAD
    <div className="page page-center">
      <div className="card card-form">
        <h2 className="form-title">Add New Car</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Car Name"
            value={car.name}
            onChange={handleChange}
            required
          />
          <input
            className="input"
            type="text"
            name="brand"
            placeholder="Car Brand"
            value={car.brand}
            onChange={handleChange}
            required
          />
          <input
            className="input"
            type="number"
            name="price"
            placeholder="Price"
            value={car.price}
            onChange={handleChange}
            required
          />
          <label className="checkbox-row">
            <input
              type="checkbox"
              name="available"
              checked={car.available}
              onChange={handleChange}
            />
            <span className="checkbox-label">Available</span>
          </label>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Add Car</button>
          </div>
        </form>
      </div>
=======
    <div style={{ padding: "20px" }}>
      <h2>Add New Car</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Car Name"
          value={car.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="brand"
          placeholder="Car Brand"
          value={car.brand}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={car.price}
          onChange={handleChange}
          required
        />
        <br />
        <label>
          Available:
          <input
            type="checkbox"
            name="available"
            checked={car.available}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add Car</button>
      </form>
>>>>>>> ebeff5ed88c4400acae952dc4878cc8c32222d3c
    </div>
  );
}

export default AddCar;
