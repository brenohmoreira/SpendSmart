package com.spensmart.spendsmartapi.services;

import com.spensmart.spendsmartapi.dto.ProfileDTO;
import com.spensmart.spendsmartapi.entities.Profile;
import com.spensmart.spendsmartapi.repositories.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileService {
    @Autowired
    private ProfileRepository profileRepository;

    public Profile findById(Long id) {
        return profileRepository.findById(id).orElse(null);
    }

    public List<Profile> findAll() {
        return profileRepository.findAll();
    }

    public Profile insert(Profile profile) {
        return profileRepository.save(profile);
    }

    public Profile fromDTO(ProfileDTO dto) {
        return new Profile(dto.getName(), dto.getPassword(), dto.getEmail(), dto.getIncome());
    }
}
