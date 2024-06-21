package com.spensmart.spendsmartapi.dto;

import com.spensmart.spendsmartapi.entities.Profile;

import java.io.Serial;
import java.io.Serializable;

public class SpentDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private Long id;
    private String title;
    private String description;
    private Double amount;

    private ProfileDTO profileDTO;

    public SpentDTO(String title, String description, Double amount, ProfileDTO profileDTO) {
        this.title = title;
        this.description = description;
        this.amount = amount;
        this.profileDTO = profileDTO;
    }

    public SpentDTO(Long id, String title, String description, Double amount, ProfileDTO profileDTO) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.amount = amount;
        this.profileDTO = profileDTO;
    }

    public ProfileDTO getProfileDTO() {
        return profileDTO;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
