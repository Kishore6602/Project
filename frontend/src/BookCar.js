import React, { useEffect, useState } from "react";

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
    <div style={{ maxWidth: "400px", margin: "40px auto", textAlign: "center" }}>
      <h2>Book a Car</h2>
      <form onSubmit={handleSubmit}>
        <label>Customer Name:</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />

        <label>Select Car:</label>
        <select value={carId} onChange={(e) => setCarId(e.target.value)} required>
          <option value="">-- Choose a car --</option>
          {cars.map((car) => (
            <option key={car.id} value={car.id}>
              {car.name} ({car.brand}) - ₹{car.price}/day
            </option>
          ))}
        </select>

        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />

        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />

        <h3>Total Price: ₹{totalPrice}</h3>

        <button type="submit">Book Car</button>
      </form>
    </div>
  );
}

export default BookCar;
