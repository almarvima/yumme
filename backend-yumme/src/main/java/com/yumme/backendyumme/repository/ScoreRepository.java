package com.yumme.backendyumme.repository;

import com.yumme.backendyumme.domain.Score;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ScoreRepository extends JpaRepository<Score,Integer> {

}

