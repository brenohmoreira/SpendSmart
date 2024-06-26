package com.spensmart.spendsmartapi.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
public class Spent implements Serializable {
    @Serial
    private final static long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private Double amount;
    private LocalDateTime moment;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "idProfile")
    private Profile profile;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "idCategory")
    private Category category;

    public Spent() {
    }

    public Spent(String title, String description, Long id, Double amount, LocalDateTime localDateTime) {
        this.title = title;
        this.description = description;
        this.id = id;
        this.amount = amount;
        this.moment = localDateTime;
    }

    public Profile getProfile() {
        return profile;
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

    public LocalDateTime getMoment() {
        return moment;
    }

    public void setMoment(LocalDateTime moment) {
        this.moment = moment;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Spent spent = (Spent) o;
        return Objects.equals(id, spent.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
