package com.example.demo.repositories;

import com.example.demo.model.RealEstate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRealEstateRepository extends JpaRepository<RealEstate, Integer> {
}
