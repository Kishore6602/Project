package com.carrental.backend.controller;

import com.carrental.backend.model.Car;
import com.carrental.backend.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cars")
@CrossOrigin(origins = "http://localhost:3000")
public class CarController {

    @Autowired
    private CarRepository carRepository;

    @GetMapping
    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    @PostMapping
    public Car addCar(@RequestBody Car car) {
        return carRepository.save(car);
    }

    @DeleteMapping("/{id}")
    public void deleteCar(@PathVariable String id) {
        carRepository.deleteById(id);
    }
}
