package com.spensmart.spendsmartapi.dto;

import com.spensmart.spendsmartapi.entities.Profile;
import com.spensmart.spendsmartapi.entities.Spent;
import jakarta.annotation.Nullable;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class ProfileDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;
    private String email;
    private String password;
    @Nullable
    private Double income;

    private List<SpentDTO> spentsDTO = new ArrayList<>();

    public ProfileDTO(String name, String email, String password, @Nullable Double income, List<SpentDTO> spentsDTO) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.income = income;
        this.spentsDTO = spentsDTO;
    }

    public ProfileDTO(Profile profile) {
        this.id = profile.getId();
        this.name = profile.getName();
        this.email = profile.getEmail();
        this.password = profile.getPassword();
        this.income = profile.getIncome();
        if(profile.getSpents() != null)
            this.spentsDTO = profile.getSpents().stream().map(spent -> new SpentDTO(spent.getId(), spent.getMoment(), spent.getTitle(), spent.getDescription(), spent.getAmount(), this)).collect(Collectors.toList());
    }

    public List<SpentDTO> getSpentsDTO() {
        return spentsDTO;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Double getIncome() {
        return income;
    }

    public void setIncome(Double income) {
        this.income = income;
    }
}
