package com.spensmart.spendsmartapi.services;

import com.spensmart.spendsmartapi.entities.Spent;
import com.spensmart.spendsmartapi.repositories.SpentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpentService {
    @Autowired
    private SpentRepository spentRepository;

    public List<Spent> findByUserId(Long id) {
        return spentRepository.findByProfileId(id);
    }
}
