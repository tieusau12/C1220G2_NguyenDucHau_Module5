package com.example.demo.controller;

import com.example.demo.model.RealEstate;
import com.example.demo.service.IRealEstateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RealEstateController {
    @Autowired
    private IRealEstateService estateService;

    @GetMapping("realEstates")
    private List<RealEstate> getAll() {
        return estateService.findAll();
    }

    @PostMapping("realEstates")
    private void addNewEstateService(@RequestBody RealEstate estate) {
        estateService.save(estate);
    }
}
