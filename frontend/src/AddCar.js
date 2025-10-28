import React, { useState } from "react";

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
    </div>
  );
}

export default AddCar;
