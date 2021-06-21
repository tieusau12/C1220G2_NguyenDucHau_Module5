package com.example.demo.service;

import com.example.demo.model.RealEstate;

import java.util.List;

public interface IRealEstateService {
    List<RealEstate> findAll();

    void save(RealEstate realEstate);
}
