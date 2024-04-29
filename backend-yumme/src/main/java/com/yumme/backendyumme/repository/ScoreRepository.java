package com.yumme.backendyumme.repository;

import com.yumme.backendyumme.domain.Score;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface ScoreRepository extends JpaRepository<Score,Integer> {

    @Query("SELECT s FROM Score s WHERE s.recipe.id = :id")
    List<Score> findScoresByRecipeId(Long id);

}

