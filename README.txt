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

API endpoints:
GET  /api/cars
POST /api/cars
GET  /api/bookings
POST /api/bookings

MongoDB connection: mongodb://localhost:27017/carrental
