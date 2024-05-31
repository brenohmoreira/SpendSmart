package com.spensmart.spendsmartapi.repositories;

import com.spensmart.spendsmartapi.entities.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, Long> {
}
