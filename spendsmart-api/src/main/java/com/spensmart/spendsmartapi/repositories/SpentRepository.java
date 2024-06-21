package com.spensmart.spendsmartapi.repositories;

import com.spensmart.spendsmartapi.entities.Spent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpentRepository extends JpaRepository<Spent, Long> {
}
