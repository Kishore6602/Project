import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddCar from "./AddCar";
import BookCar from "./BookCar";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Car Rental System</h1>
        <Link to="/add" style={{ margin: "10px" }}>
          <button>Add Car</button>
        </Link>
        <Link to="/book" style={{ margin: "10px" }}>
          <button>Book Car</button>
        </Link>

        <Routes>
          <Route path="/add" element={<AddCar />} />
          <Route path="/book" element={<BookCar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
