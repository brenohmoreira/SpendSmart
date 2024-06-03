package com.spensmart.spendsmartapi.resources;

import com.spensmart.spendsmartapi.dto.ProfileDTO;
import com.spensmart.spendsmartapi.entities.Profile;
import com.spensmart.spendsmartapi.services.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/api/profile")
public class ProfileResource {
    @Autowired
    ProfileService profileService;

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Profile> getProfileById(@PathVariable("id") String id) {
        Profile profile = profileService.findById(Long.parseLong(id));
        return ResponseEntity.ok(profile);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<String> insertProfile(@RequestBody ProfileDTO profileDTO) {
        Profile profile = profileService.fromDTO(profileDTO);
        List<Profile> profiles = profileService.findAll();
        for(Profile instProfile : profiles) {
            if(profile.getEmail().equals(instProfile.getEmail())) {
                return ResponseEntity.badRequest().body("Account already exists");
            }
        }
        profile = profileService.insert(profile);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(profile.getId()).toUri();
        return ResponseEntity.created(uri).body("Account created");
    }
}
