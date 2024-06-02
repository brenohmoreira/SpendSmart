package com.spensmart.spendsmartapi.resources;

import com.spensmart.spendsmartapi.entities.Profile;
import com.spensmart.spendsmartapi.format.AuthenticationRequest;
import com.spensmart.spendsmartapi.services.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(name = "/")
public class IndexResource {

    @Autowired
    ProfileService profileService;

    @GetMapping
    public String index() {
        return "Teste";
    }

    @PostMapping(value = "authenticate")
    public ResponseEntity<Long> authenticate(@RequestBody AuthenticationRequest authenticationRequest) {
        List<Profile> profiles = profileService.findAll();
        Long id = null;
        for (Profile profile : profiles) {
            if(profile.getEmail().equals(authenticationRequest.getEmail()) && profile.getPassword().equals(authenticationRequest.getPassword())) {
                id = profile.getId();
                break;
            }
        }
        return ResponseEntity.status(HttpStatus.OK).body(id);
    }
}
