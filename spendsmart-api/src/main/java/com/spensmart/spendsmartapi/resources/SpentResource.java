package com.spensmart.spendsmartapi.resources;

import com.spensmart.spendsmartapi.entities.Spent;
import com.spensmart.spendsmartapi.services.SpentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/spent")
public class SpentResource {
    @Autowired
    private SpentService spentService;

    @GetMapping(value = "/user/{id}")
    public ResponseEntity<List<Spent>> findByUserId(@PathVariable Long id) {
        // verificar se existe
        return ResponseEntity.ok(spentService.findByUserId(id));
    }
}
