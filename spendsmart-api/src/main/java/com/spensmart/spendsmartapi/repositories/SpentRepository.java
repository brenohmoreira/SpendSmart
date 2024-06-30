package com.spensmart.spendsmartapi.repositories;

import com.spensmart.spendsmartapi.entities.Spent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SpentRepository extends JpaRepository<Spent, Long> {
    List<Spent> findByProfileId(Long idProfile);
}
