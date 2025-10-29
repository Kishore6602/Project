# Project
🚗 SmartRide — Car Rental Management System

SmartRide is a full-stack web application for managing car rentals efficiently.
It allows admins to add and manage cars, while users can book cars based on availability and rental dates.

💻 Tech Stack

Frontend: React.js (Vite)

Backend: Spring Boot

Database: MongoDB

API Testing: Postman

⚙️ Features

Add, view, and manage cars

Book cars with start and end dates

Automatic total price calculation based on number of rental days

Data stored securely in MongoDB

Real-time updates for bookings

📂 Project Structure

frontend/ → React UI for adding and booking cars

backend/ → Spring Boot REST API handling data and logic

database/ → MongoDB collections for cars and bookings

🚀 How to Run

Car Rental - Full Stack (Backend + Frontend)

Folders:
- backend: Spring Boot app (port 8080)
- frontend: React app (port 3000)

Backend - run:
1. Java 17+ and Maven installed.
2. MongoDB running locally.
3. cd backend
4. mvn clean install -DskipTests
5. mvn spring-boot:run

Frontend - run:
1. Node.js and npm installed.
2. cd frontend
3. npm install
4. npm start

Mongo DB Screenshots added in ppt

API endpoints:
GET  /api/cars
POST /api/cars
GET  /api/bookings
POST /api/bookings

MongoDB connection: mongodb://localhost:27017/carrental

🧠 Future Enhancements

Add authentication for users/admins

Include payment integration

Show booking history and car availability calendar
