package com.spensmart.spendsmartapi.dto;

import com.spensmart.spendsmartapi.entities.Category;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class CategoryDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;

    private List<SpentDTO> spentDTOS = new ArrayList<>();

    public CategoryDTO(String name, List<SpentDTO> spentDTOS) {
        this.name = name;
        this.spentDTOS = spentDTOS;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<SpentDTO> getSpentDTOS() {
        return spentDTOS;
    }

    public void setSpentDTOS(List<SpentDTO> spentDTOS) {
        this.spentDTOS = spentDTOS;
    }
}
