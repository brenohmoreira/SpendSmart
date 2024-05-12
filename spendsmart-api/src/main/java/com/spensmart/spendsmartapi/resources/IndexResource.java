package com.spensmart.spendsmartapi.resources;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(name = "/")
public class IndexResource {

    @GetMapping
    public String index() {
        return "Teste";
    }
}
