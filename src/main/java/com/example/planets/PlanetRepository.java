package com.example.planets;


import org.springframework.data.repository.CrudRepository;

import com.example.planets.PlanetInfo;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface PlanetRepository extends CrudRepository<PlanetInfo, Integer> {

}