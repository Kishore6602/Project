import React, { useEffect, useState } from "react";
import "./styles.css";

function BookCar() {
  const [cars, setCars] = useState([]);
  const [carId, setCarId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch cars from backend
  useEffect(() => {
    fetch("http://localhost:8080/api/cars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error("Error fetching cars:", err));
  }, []);

  // Calculate total price dynamically
  useEffect(() => {
    if (carId && startDate && endDate) {
      const selectedCar = cars.find((car) => car.id === carId);
      if (selectedCar) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
        setTotalPrice(days > 0 ? days * selectedCar.price : 0);
      }
    }
  }, [carId, startDate, endDate, cars]);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const booking = {
      carId,
      customerName,
      startDate,
      endDate,
      totalPrice,
    };

    console.log("Booking sent:", booking);

    try {
      const response = await fetch("http://localhost:8080/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking),
      });

      if (response.ok) {
        alert("Booking saved successfully!");
        setCustomerName("");
        setCarId("");
        setStartDate("");
        setEndDate("");
        setTotalPrice(0);
      } else {
        alert("Failed to save booking!");
      }
    } catch (error) {
      console.error("Error saving booking:", error);
    }
  };

  return (
    <div className="page page-center">
      <div className="card card-form">
        <h2 className="form-title">Book a Car</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="label">Customer Name:</label>
          <input
            className="input"
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />

          <label className="label">Select Car:</label>
          <select
            className="input"
            value={carId}
            onChange={(e) => setCarId(e.target.value)}
            required
          >
            <option value="">-- Choose a car --</option>
            {cars.map((car) => (
              <option key={car.id} value={car.id}>
                {car.name} ({car.brand}) - ₹{car.price}/day
              </option>
            ))}
          </select>

          <div className="date-row">
            <div>
              <label className="label">Start Date:</label>
              <input
                className="input"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="label">End Date:</label>
              <input
                className="input"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </div>
          </div>

          <h3 className="total">Total Price: ₹{totalPrice}</h3>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Book Car</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookCar;
