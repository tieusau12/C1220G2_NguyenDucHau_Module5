package com.example.demo.service.impl;

import com.example.demo.model.RealEstate;
import com.example.demo.repositories.IRealEstateRepository;
import com.example.demo.service.IRealEstateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RealEstateServiceImpl implements IRealEstateService {

    @Autowired
    private IRealEstateRepository repository;

    @Override
    public List<RealEstate> findAll() {
        return repository.findAll();
    }

    @Override
    public void save(RealEstate realEstate) {
        repository.save(realEstate);
    }
}
