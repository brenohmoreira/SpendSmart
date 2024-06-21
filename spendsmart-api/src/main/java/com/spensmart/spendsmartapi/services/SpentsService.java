package com.spensmart.spendsmartapi.services;

import com.spensmart.spendsmartapi.repositories.SpentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SpentsService {
    @Autowired
    private SpentRepository spentRepository;

    
}
